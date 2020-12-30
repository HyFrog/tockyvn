import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import Content from './content.md';
import './rule-learning.scss'

export default function RuleLearning() {
  const [mdContent, setMdContent] = useState('');

  useEffect(() => {
    fetch(Content).then(res => res.text()).then(text => setMdContent(text));
  }, [])

  return (
    <div className="rule-learning">
      <ReactMarkdown plugins={[gfm]} children={mdContent} />
    </div>
  )
}
