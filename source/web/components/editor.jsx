var Keyboard = require('./editor-keyboard.jsx');
var Controls = require('./editor-controls.jsx');
var Legend = require('./editor-legend.jsx');

var Component = React.createClass({
	render: function () {
		return (
			<div className="custom-margin-fix">
				<div className="jumbotron custom-background custom-background-layout-editor">
					<div className="container">
						<h1>Layout Editor</h1>
						<p>
							Create multiple keyboard layouts with custom bindings.
						</p>
						<Controls/>
					</div>
				</div>
				<div className="container">
					<Keyboard/>
				</div>
				<div className="container">
					<div className="row">
						<Legend/>
						<div className="col-sm-4">
							<h2>Tips</h2>
							Note that you should disable <code>Input Button Code Is Scan Code</code> in the <a href="#/settings/engine">Manta Settings</a> if
							your native keyboard layout is listed in the Manta settings.
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Component;
