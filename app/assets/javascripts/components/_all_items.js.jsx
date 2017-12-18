var AllItems  = createReactClass({
  handleDelete(id){
    this.props.handleDelete(id);
  },
  handleEdit(){

  },
  render(){
    var items  = this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item} handleEdit={this.handleEdit}
                handleDelete={this.handleDelete.bind(this, item.id)} />
        </div>
      )
    });
    return (
      <div>
        { items }
      </div>
    )
  }
});