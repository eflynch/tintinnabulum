var React = require('react/addons');

var Header = require('./header');
var Pieces = require('./pieces');

// The whole page
var Main = React.createClass({
    render: function (){
        return (
            <div>
                <Header items={[
                    {text: "Compositions", url: ""},
                    {text: "Musical Mapping", url: ""},
                    {text: "Tidmarsh", url: "tidmarsh.media.mit.edu"},
                    {text: "MAXChain", url: "github.com/eflynch/maxchain"},
                    {text: "Contacts", url: ""}
                ]}>
                </Header>
                <Pieces></Pieces>
            </div>
        );
    }
});

// Render page after DOM is loaded
document.addEventListener("DOMContentLoaded", function (){
    React.render(<Main/>, document.body);
});
