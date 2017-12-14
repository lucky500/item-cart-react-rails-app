var NewItem  = createReactClass({
  render(){
    return (
      <div>
        <input type="text" placeholder="Enter Item name" ref={(name) => this.name = name; }} />
      </div>
    )
  }
});