function DessertsList(props) {
    // Implement the component here.
    const items = props.data.filter((item) => {
        return item.calories < 500;
    }).sort((a,b) => {
        return a.calories - b.calories
    }).map( item => {
        return <li>{item.name} - {item.calories} cal.</li>
    })

    return (
        <ul>
            {items}
        </ul>
    );
  }
  
  export default DessertsList;
  