import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFuulItem from "./components/ShowFuulItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quae?',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quae?',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quae?',
          category: 'sofa',
          price: '549.00'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'wall-light.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quae?',
          category: 'light',
          price: '25.00'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quae?',
          category: 'chairs',
          price: '45.00'
        },
        {
          id: 6,
          title: 'Стол рабочий',
          img: 'chair-work.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quae?',
          category: 'tables',
          price: '112.00'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items;
    // Добавляем функции возможность работать с состояниями
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items 
          items={this.state.currentItems}
          onAdd={this.addToOrder}
          onShowItem={this.onShowItem}
        />
        {this.state.showFullItem && 
          <ShowFuulItem 
            item={this.state.fullItem} 
            onAdd={this.addToOrder} 
            onShowItem={this.onShowItem}
          />}
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({currentItems: this.state.items.filter((item) => item.category === category)})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter((item) => item.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      // Добавляем в массив элементы
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
