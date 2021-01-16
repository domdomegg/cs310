import React, { useMemo, useEffect } from 'react';
import { parse } from 'language'
import { infer } from 'algorithm-w'
import ASTView from './ASTView';

export interface Highlight {
  start: number;
  end: number;
  className: string;
}

function ResultView({ code, setHighlights }: { code: string, setHighlights: (h: Highlight[]) => void }) {
  // Parse the code, highlighting any errors
  const parseResult = useMemo(() => {
    return parse(code, true);
  }, [code]);
  useEffect(() => setHighlights(parseResult.accepted ? [] : [{ start: parseResult.issuePosition.start, end: parseResult.issuePosition.end, className: 'highlight-error' }]), [parseResult, setHighlights]);

  // Infer the types, highlighting any errors
  const inferenceResult = useMemo(() => {
    if (!parseResult.accepted) return;
    return infer(parseResult.value, true);
  }, [parseResult])!;
  useEffect(() => inferenceResult && setHighlights(inferenceResult.accepted ? [] : [{ start: inferenceResult.issuePosition.start, end: inferenceResult.issuePosition.end, className: 'highlight-error' }]), [inferenceResult, setHighlights]);

  if (!parseResult.accepted) {
    return <>
      <h2>AST</h2>
      <p>{parseResult.message}</p>
    </>;
  }

  const hoverCallback = createHoverCallback(setHighlights, []);
  return <>
    <h2>AST</h2>
    <ASTView ast={parseResult.value} hoverCallback={hoverCallback} />

    <h2>Type derivation</h2>
    {inferenceResult.value!.steps.map((step, i) => <div key={i} className='type-derivation-step'><h3>Step {i+1}</h3><p>{step.message.split('`').map((s, j) => j % 2 === 0 ? s : <code key={j}>{s}</code>)}</p><ASTView ast={step.ast} hoverCallback={hoverCallback} /></div>)}

    {inferenceResult.accepted && <>
      <h2>Type</h2>
      <p><code>{inferenceResult.value.type.toString()}</code></p>
    </>}
  </>;
}

const createHoverCallback = (setHighlights: (h: Highlight[]) => void, otherHighlights: Highlight[]) => (active: boolean, p: { start: number, end: number }) => {
  setHighlights(active ? [...otherHighlights, { start: p.start, end: p.end, className: 'highlight-white' }] : otherHighlights);
}

export default ResultView;