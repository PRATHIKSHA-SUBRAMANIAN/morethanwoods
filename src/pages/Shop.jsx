import React, { useState } from "react";
import products from '../assets/data/products';
import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import ProductsList from '../components/UI/ProductsList';
import '../styles/shop.css';

const Shop = () => {

    const [productsData, setProductsData] = useState(products);

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if (filterValue === 'sofa') {
            const filteredProducts = products.filter(
                item => item.category === 'sofa'
            );
            setProductsData(filteredProducts);
        };
        if (filterValue === 'chair') {
            const filteredProducts = products.filter(
                item => item.category === 'chair'
            );
            setProductsData(filteredProducts);
        };

    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value
        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchedProducts)
    }
    return (
        <Helmet title='Shop'>
            <CommonSection title='Products' />
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="filter__widget">
                                <select onChange={handleFilter}>
                                    <option>Filter By Category</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="chair">Chair</option>
                                    
                                </select>
                            </div>
                        </Col>
                        
                        <Col lg='6' md='12'>
                            <div className="search__box">
                                <input type="text" placeholder="Search here" onChange={handleSearch} />
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        {
                            productsData.length === 0 ? (
                                <h1 className="text-center fs-4">No Products are found!</h1>
                            ) : (
                                <ProductsList data={productsData} />)
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Shop;