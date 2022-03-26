import MenuController from '../src/Screens/Menu/MenuController'
import news from '../src/Services/Apis/Info/news';

export default function Home({ menus }) {
  return (
    <MenuController menus={menus} />
  )
}


export async function getStaticProps() {

  console.log("Inicio SSG getStaticProps");
  const info = await news.getMenu();

  let arrayMenus = [];

  if (info.status === 200) {
    arrayMenus = info.data.info;
  }

  return {
    props: {
      menus: arrayMenus,
    },
  }
}