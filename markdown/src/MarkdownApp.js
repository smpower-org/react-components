import React from 'react';
import MarkdownIt from 'markdown-it';
import markdownFile from './markdown.md';

const md = new MarkdownIt();
const result = md.render(markdownFile);

class MarkdownApp extends React.Component {
	constructor() {
	  super();

		const md = new MarkdownIt();

		this.state = {
		  result: md.render(markdownFile)
		};
	}

	render() {
		return (
			<div>
				<div className="markdown-content">
					<div dangerouslySetInnerHTML={{__html: this.state.result}}></div>
				</div>
			</div>
		);
	}
}

export default MarkdownApp;
