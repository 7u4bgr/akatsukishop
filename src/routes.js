import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Location from "./pages/unvan";
import Products from './pages/products'
const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),
  about: routeItem(2, 'about', "/about", About),
  notFound: routeItem(3, 'notFound', "*", NotFound),
 location:routeItem(4,"location","location",Location),
 products:routeItem(5,"products","products",Products)
};

const routeArr = Object.values(routes);

export { routes, routeArr };
