var React = require('react');

var NavBarLink = React.createClass({
    render: function () {
        return (
            <a href={this.props.url}>{this.props.text}</a>
        );
    }
});

var NavBarItem = React.createClass({
    generateLink: function (){
        return <NavBarLink key={Math.random()} url={this.props.url} text={this.props.text} />;
    },
    generateSubmenu: function (){
        return <NavBar key={Math.random()} items={this.props.submenu} />
    },
    generateContent: function (){
        var content = [this.generateLink()];
        if(this.props.submenu){
            content.push(this.generateSubmenu());
        }
        return content;
    },
    render: function (){
        var content = this.generateContent();
        return (
            <li>
                {content}
            </li>
        )
    }
});

var NavBar = React.createClass({
    generateItem: function(item){
        return <NavBarItem key={Math.random()} text={item.text} url={item.url} submenu={item.submenu} />
    },
    render: function (){
        var items = this.props.items.map(this.generateItem);
        return (
            <ul className="menu">
            {items}
            </ul>
        );
    }
});

module.exports = React.createClass({
    displayName: "Header",
    render: function (){
        return (
            <header>
                <h1>Tintinnabulum</h1>
                <nav>
                    <NavBar items={this.props.items}/>
                </nav>
            </header>
        );
    }
});
