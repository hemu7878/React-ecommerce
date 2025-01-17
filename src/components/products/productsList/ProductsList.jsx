import React from 'react'
import styles from "../../../styles/products/productsList.module.css";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { allProductsList,CortadoList,EspressobasedDrinksList,MacchiatoList} from '../../../data/productsPageData';


function ProductsList(props) {
const { activeTab} = props;
const products = [allProductsList,EspressobasedDrinksList, MacchiatoList, CortadoList];

  return (
<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="16px">
        {products[activeTab].map(function (src, index) {
          return (
            <div className={styles.imgContainer}>
              <img src={src} alt={"Image " + index} />
            </div>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>  )
}

export default ProductsList