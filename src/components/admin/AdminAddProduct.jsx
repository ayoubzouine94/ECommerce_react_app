import React,{useState,useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png';
import MultiImageInput from 'react-multiple-image-input';
import { useSelector ,useDispatch} from 'react-redux';
import { getAllCategories } from '../../redux/actions/categorieAction';
import getAllBrands from '../../redux/actions/brandAction';
import { CompactPicker } from 'react-color';
import { getOneCategorie } from '../../redux/actions/subCategorieAction';
import { createProduct } from '../../redux/actions/productsAction';

const AdminAddProduct = () => {

    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBrands())
    }, []);
    const categories = useSelector(state=>state.allCategory.categorie);
    //console.log(categories)

   
    const brands = useSelector(state=>state.allBrands.brands);
    const subCat = useSelector(state=>state.subCategorie.subcategorie);
  




    const [images, setImages] = useState({});

     // Value State
    const [prodName, setProdName] = useState('');
    const [prodDesc, setProdDesc] = useState('');
    const [priceBefor, setPriceBefor] = useState(0);
    const [priceAfter, setPriceAfter] = useState(0);
    const [qty, setQty] = useState(0);
    const [catId, setCatId] = useState('');
    const [brandId, setBrandId] = useState('');
    const [subCatId, setSubCatId] = useState([]);
    const [selectedSubCatId, setSelectedSubCatId] = useState([]);

    //when show and hide Picker
    const [showColor, setShowColor] = useState(false);

    //state colors 
    const [colors, setColors] = useState([]);


    const onSelect = (selectedList) => {
           setSelectedSubCatId(selectedList);
          // console.log(selectedSubCatId);
    }
    const onRemove = (selectedList) => {
        setSelectedSubCatId(selectedList);
       // console.log(selectedSubCatId);
    }
    


    const [options, setOptions] = useState([]);
    //When Select  Categorie Store ID
    const onSelectCat =async (e) =>{
        
        if(e.target.value != 0){
          await  dispatch(getOneCategorie(e.target.value))
        }
        
        setCatId(e.target.value);

    }
      //When Select  Brands Store ID
      const onSelectbrand = (e) =>{
        setBrandId(e.target.value)

    }
  //when choose new color 
    const handleChangeComplete = (color) =>{

          setShowColor(!showColor);
          setColors([...colors ,color.hex])
    }
    //Methode Remove Color in array
    const removeColor = (color) =>{
        const newColors = colors.filter((e)=>e !== color)
        setColors(newColors);

    }
  // console.log(colors)
        useEffect(() => {
            if(catId != 0){
                if(subCat.data){
                   setOptions(subCat.data)

                }
            }
        }, [catId]);
  //to convert base 64 to file
  function dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}
    // when Save Data
    const handleSubmit =async (e) =>{
        e.preventDefault();
        const imgCover = dataURLtoFile(images[0], Math.random()+".png")
       const formData = new FormData();
       formData.append("title",prodName);
       formData.append("imageCover",imgCover);
       formData.append("category",catId);
       formData.append("description",prodDesc);
       formData.append("quantity",qty);
       formData.append("price",priceBefor);
     
       

       await dispatch(createProduct(formData));
    //    console.log(imgCover);
    //    console.log(prodName);
    //    console.log(prodDesc);
    //    console.log(qty);
    //    console.log(priceBefor);
    //    console.log(catId);
       console.log(formData)

       
              
       

    }

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Ajouter Nouveau Produit</div>
                <Col sm="8">
                    <div className="text-form pb-2">Image Produit</div>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        
                        />
                    <input
                        type="text"
                        value={prodName}
                        onChange={(e)=>setProdName(e.target.value)}
                        className="input-form d-block mt-3 px-3"
                        placeholder="Nom Produit"
                    />
                    <textarea
                        value={prodDesc}
                        onChange={(e)=>setProdDesc(e.target.value)}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder=" Description"
                    />
                    <input
                        value={priceBefor}
                        onChange={(e)=>setPriceBefor(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Prix Avant Remise"
                    />
                    <input
                        value={priceAfter}
                        onChange={(e)=>setPriceAfter(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Prix Produit"
                    />
                     <input
                        value={qty}
                        onChange={(e)=>setQty(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Quantitie"
                    />
                    <select
                        name="categories"
                        id="cat"
                        onChange={onSelectCat}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0"> Categorie Principale</option>
                        {
                            categories.data ? (categories.data.map(item=>{
                                 return( <option key={item._id} value={item._id}>{item.name}</option>)
                            })):null
                        }
                       
                      
                    </select>

                    <Multiselect
                        className="mt-2 text-start"
                        placeholder="Sous Categorie"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        id="brand"
                        onChange={onSelectbrand}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">Marque</option>
                        {
                            brands.data ? (brands.data.map(item=>{
                                return(<option key={item._id} value={item._id}>{item.slug}</option>)
                            })

                            ):null
                        }
                        
                        
                    </select>
                    <div className="text-form mt-3 ">Couleur Disponible</div>
                    <div className="mt-1 d-flex">
                        {
                            colors.length >=1 ? (colors.map((color,index)=>{
                                return (
                                      <div 
                                            onClick={()=>removeColor(color)}
                                            key={index}
                                            className="color ms-2 border  mt-1"
                                            style={{ backgroundColor: color }}>
                
                                        </div>)
                            })):null
                        }
                      
                      
                        <img onClick={()=>setShowColor(!showColor)} src={add} alt="" width="30px" height="35px" style={{cursor:"pointer"}} />
                        {
                            showColor === true ? (<CompactPicker
                                onChangeComplete={handleChangeComplete}
                                />) : null
                        }
                        

                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">Enregistrer</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddProduct