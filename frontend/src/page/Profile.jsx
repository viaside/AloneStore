import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import OrderUser from "../component/OrderUser/OrderUser";
import OrderAdmin from "../component/OrderAdmin/OrderAdmin";
import ProductAdmin from "../component/ProductAdmin/ProductAdmin";
import ProductAdminModal from "../component/ProductAdmin/ProductModalSetting";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";

const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.isMobile? "column" : "row"};
    align-items: ${props => props.isMobile? "center" : ""};
    width: 100%;
`

const Filter = styled.div`
    display: flex;
    width: ${props => props.isMobile? "" : "20%"};
    flex-direction: ${props => props.isMobile? "row" : "column"};
    justify-content: ${props => props.isMobile? " center" : ""};
` 
const FilterButton = styled.div`
    background-color: 0;
    padding-bottom: 15px;
    padding-right: 15px;
    font-size: 20px;
    &:hover{
        cursor: pointer;
    };
    color: ${props => props.active ? "Black" : "var(--gray-element)"};
`   

const Label = styled.p`
    font-size: 24px;
    padding: 0px;
    margin: 0px;
`

const PGray = styled.p`
    font-size: 20px; 
    color: var(--gray-text);
    padding: 0px;
    margin: 0px;
    margin-left: auto;
    height: 0px;
`


function Profile() {
    const [NowPage, SetPage] = useState("Info");
    const [Info, setInfo] = useState([]);
    const [Products, setProducts] = useState([]);
    const [Login, setLogin] = useState(null); 
    const [Password, setPassword] = useState(null); 
    const [FullName, setFullName] = useState(null); 
    const [Email, setEmail] = useState(null); 
    const [Phone, setPhone] = useState(null); 
    const [Address, setAddress] = useState(null); 
    const [Category, setCategory] = useState(); 
    const [Quantity, setQuantity] = useState(); 
    const [isShowAddProductModal, showAddProductModal] = useState(false); 
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    useEffect(() => {UpdateInfo()}, []);

    function UpdateInfo(){
        fetch(`/users/${localStorage.getItem("userId")}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then(async (data) => {
            setLogin(data[0].login);
            setPassword(data[0].password);
            setFullName(data[0].full_name);                   
            setEmail(data[0].email);
            setPhone(data[0].phone_number);
            setAddress(data[0].address);
            setInfo(data[0]);
        })
        .catch((error) => console.log(error));
    }

    function UpdateProduct(){
        fetch(`/products`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then(async (data) => {
            await setProducts(data);
        })
        .catch((error) => console.log(error));
        fetch('/category',{
            method: "GET"
        })
        .then((response) => response.json())
        .then(async (data) => {
            setCategory(data)
        })
    }

    function DeleteProduct(id){
        fetch(`/products/${id}`, {
            method: "Delete",
        })
        .then((response) => response.json())
        .then(
            UpdateProduct()
        )
        .catch((error) => console.log(error));
    }

    function FuncWithProduct(id, isNew, name, desc, category_id, price, mainImg, frontImg, backImg, is_one_size){
        const formData = new FormData();
        let MainImg = new File([mainImg?.data], `${name.replace(" ", "")}_main.jpg`);
        let FrontImg = new File([frontImg?.data], `${name.replace(" ", "")}_front.jpg`);
        let BackImg = new File([backImg?.data], `${name.replace(" ", "")}_back.jpg`);
        console.log(frontImg)
        formData.append("file", mainImg?.data? MainImg : mainImg);
        formData.append("file", frontImg?.data? FrontImg : frontImg);
        formData.append("file", backImg?.data? BackImg : backImg);
        formData.append("fileName", name);
        formData.append("name", name);
        formData.append("desc", desc);
        formData.append("category", category_id);
        formData.append("price", price);
        formData.append("isOneSize", is_one_size);
        if(isNew){
                const requestOptions = {
                method: 'POST',
                body: formData
            };
            fetch('/products', requestOptions)
            .then(UpdateProduct())
        } else{
            const requestOptions = {
                method: 'PUT',
                body: formData
            };
            fetch('/products/' + id, requestOptions)
            .then(UpdateProduct())
        }
    }

    function ChangeQuantity(productId, total, s, m, l, xl) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({product_id: productId, quantity_total: total, quantity_s: s, quantity_m: m, quantity_l: l, quantity_xl: xl})
        };
        fetch('/quantity/' + productId, requestOptions)
        .then(UpdateProduct());
        UpdateProduct();
    }

    function SaveChangesUser(){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login: Login, password: Password, phone_number: Phone, email: Email, full_name: FullName, address: Address })
        };
        fetch('/users/' + Info.id, requestOptions)
        .then(async res => {
            await UpdateInfo();
        })
    }

    const HandleChange = (event) => {
        switch (event.target.name) {
            case "Login":
                setLogin(event.target.value);
                break;
            case "Password": 
                setPassword(event.target.value);
                break;
            case "FullName": 
                setFullName(event.target.value);                   
                break;
            case "Email": 
                setEmail(event.target.value);
                break;
            case "Phone":
                setPhone(event.target.value);
                break;
            case "Address":
                setAddress(event.target.value);
                break
            default:
                break;
        }
    }


    return (
        <Container isMobile={isMobile} className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
                {Info.is_admin? 
                    <Filter isMobile={isMobile}>
                        <FilterButton active={ NowPage === "Info" ? true : false} onClick={() => SetPage("Info")}>Info</FilterButton>
                        <FilterButton active={ NowPage === "Orders" ? true : false} onClick={() => SetPage("Orders")}>All Orders</FilterButton>
                        <FilterButton active={ NowPage === "Catalog" ? true : false} onClick={() => {SetPage("Catalog"); UpdateProduct()}}>Catalog item</FilterButton>
                        <div style={{width: "40%"}}>
                            <Button onClick={() => {
                                localStorage.setItem("isLogined", false); 
                                localStorage.setItem("userId", null); 
                                localStorage.setItem("cartId", null); 
                                window.location.href = "/"
                            }}>Log out</Button>
                        </div>
                    </Filter>
                    :
                    <Filter isMobile={isMobile}>
                        <FilterButton active={ NowPage === "Info" ? true : false} onClick={() => SetPage("Info")}>Info</FilterButton>
                        <FilterButton active={ NowPage === "Orders" ? true : false} onClick={() => SetPage("Orders")}>Orders</FilterButton>
                        <div style={{width: "40%"}}>
                            <Button onClick={() => {localStorage.setItem("isLogined", false); window.location.href = "/"}}>Log out</Button>
                        </div>
                    </Filter>
                }
            {NowPage === "Info"? 
            <div style={{width: "70%" ,display: "flex", flexDirection: "column"}}> 
                <Label>Login</Label>              
                <Input name = "Login" value={Login} onChange={(e) => HandleChange(e)} text={null} placeholder="Login"/>
                <Label>Password</Label>           
                <Input name = "Password" value={Password} onChange={(e) => HandleChange(e)} text={null} placeholder="Password"/>
                <Label>Full name</Label>          
                <Input name = "FullName" value={FullName} onChange={(e) => HandleChange(e)} text={null} placeholder="Full name"/>
                <Label>Email address</Label>      
                <Input name = "Email" value={Email} onChange={(e) => HandleChange(e)} text={null} placeholder="email@mail.com"/>
                <Label>Phone number</Label>       
                <Input name = "Phone" value={Phone} onChange={(e) => HandleChange(e)} text={null} placeholder="+7(999)999-99-99"/>
                <Label>Address</Label>            
                <Input name = "Address" value={Address} onChange={(e) => HandleChange(e)} text={null} placeholder="Address"/>
                <br />
                <Button func={()=> SaveChangesUser()}>Save changes</Button>
            </div>
            :
            NowPage ==="Orders" ?
                <div style={{width: "100%"}}>
                    {Info.is_admin?
                        <OrderAdmin 
                            id = {16457597} date = {"20.04.2020"} status = {"in dilevery"} userName = {"1"} totalPrice={1000 } fullName = {"Ivan Voloshin Anatolevich"} 
                            phoneNumber = {"+7(999)999-99-99"} address = {"Moscow, Chelkovo, Bogorodkiy, 3, 63"} 
                            products = {[{img: '1', name: "Cap", size: "M", price: 400},{img: '1', name: "Cap", size: "M", price: 400},{img: '1', name: "Cap", size: "M", price: 400},]} 
                            Desc = {"The shopping cart automatically remembers the entered data (exclusively on your device), so you won't have to fill in the fields next time."}
                        />
                        :
                        <OrderUser 
                            id = {16457597} date = {"20.04.2020"} status = {"in dilevery"} totalPrice={1000 } fullName = {"Ivan Voloshin Anatolevich"} 
                            phoneNumber = {"+7(999)999-99-99"} address = {"Moscow, Chelkovo, Bogorodkiy, 3, 63"} 
                            products = {[{img: '1', name: "Cap", size: "M", price: 400},{img: '1', name: "Cap", size: "M", price: 400},{img: '1', name: "Cap", size: "M", price: 400},]} 
                            Desc = {"The shopping cart automatically remembers the entered data (exclusively on your device), so you won't have to fill in the fields next time."}
                        />
                    }
                </div>
                :
                <div style={{width: "70%"}}>
                    {Info.is_admin? 
                        <div>
                            <div style={{display: "flex", justifyContent: "end", marginBottom: 20}}>
                                <Button 
                                    onClick={() => {showAddProductModal(true)}} 
                                    style={{width: 100}}
                                    >
                                    Add item
                                </Button>
                                {isShowAddProductModal? 
                                    <ProductAdminModal 
                                        categoryList={Category} 
                                        isNew={true} 
                                        isShow={isShowAddProductModal} 
                                        close={() => showAddProductModal(false)} 
                                        func={FuncWithProduct} 
                                        img = {{main_img: null, front_img: null, back_img: null}} 
                                    />
                                    : null
                                }
                            </div>
                            <div>
                                {Products?.map((el, i) => { return(
                                    <ProductAdmin 
                                        el={el}
                                        categoryList={Category}
                                        ChangeQuantity={ChangeQuantity}
                                        Deleted = {DeleteProduct}
                                        func={FuncWithProduct}
                                        key={i}
                                    />)
                                })}
                            </div>
                        </div>
                        : null
                    }
                </div>
            }
        </Container>
    )
}

export default Profile