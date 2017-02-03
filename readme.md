# React edu project. Weather ap.

## Why use Link

Realy simmple ```<a href="#/some">Some</a>``` works fine. But in SPA I need show where am I. Css classes in this case arent usefull. Maintainly  examples: 
```jsx
<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get weather</IndexLink>
<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
```

## Routing

I create routings like in Laravel ```routes/web.php```. But here in React based CPA it is in components wrapped. Main component is like base layout where as variables are pasted roted blocks.

In jsx syntax is so:
```jsx
//Main.jsx
<section>
    <Nav />
    <h2>Main Component</h2>
    {this.props.children}
</section>
```

All routet components will be rendered like props on place ```{this.props.children}```. Routing rules must be placed in app entry and show like this: 

```jsx
//app.jsx
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about"  component={About}/>
      <Route path='examples' component={Example}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
```


