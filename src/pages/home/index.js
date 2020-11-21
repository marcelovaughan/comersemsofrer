import React, { useEffect, useState } from 'react';
import _ from "lodash" 

import FoodClient from '../../client';

import { makeStyles, fade } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SaveIcon from '@material-ui/icons/Save';

import ChartDoughnut from '../../components/graph/donuts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  list: {
    flexGrow: 1,
    padding: theme.spacing(0),
    height: '78%',
    overflow: 'auto',
    maxHeight: '78%',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '450px',
    height: '450px',    
  },
  titleGraph:{
    fontFamily: 'Roboto, sans-serif'
  },
  item: {
    marginBottom: theme.spacing(1),
    padding: 4,
    alignItems: 'flex-start',  
  },
  itemWrapper: {
    display: 'flex',
    marginBottom: 10,
  },
  itemText: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  itemListText: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTextTitle: {
    margin: 0,
    padding: 0,
    fontSize: '14px',
    fontFamily: 'Roboto, sans-serif',
    marginBottom: 0,
    paddingRight: 20,
    fontWeight: 400,
  },
  itemActions:{
    width: '30%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  macros: {
    display: 'flex',
    paddingBottom: '10px',
    borderBottom: '1px solid #ccc',
    marginBottom: '0px',
  },
  macrosGraph: {
    display: 'flex',
    paddingBottom: '10px',
    borderBottom: '1px solid #ccc',
    marginBottom: '0px',
  },
  campoPorcao: {
    width: 56,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#eaeaea', 0.8),
    marginLeft: 0,
    width: "100%",
    marginBottom: "8px",   
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    top: 0,
  },
  inputRoot: {
    color: "inherit",
    width: "95%",
  },
  linhaMacro: {    
    lineHeight: '12px',
    padding: '2px',
    marginRight: '2px',
    fontSize: 12,
    fontFamily: 'Roboto, sans-serif',
    background: '#eaeaea',
    borderRadius: '9px',
    width: '25%',
  },
  linhaMacroGraph: {    
    lineHeight: '12px',
    padding: '2px',
    marginRight: '2px',
    fontSize: 12,
    fontFamily: 'Roboto, sans-serif',
    background: '#eaeaea',
    borderRadius: '9px',
    width: '33.3%',
  },
  footerList: {
    padding: '8px 0 0',
    margin: 0,
    borderTop: '1px solid #eaeaea',
    textAlign: 'right',
  }
}));

function Home() {
  
  const classes = useStyles();
  
  const [foodsList, setFoodsList] = useState([]);
  const [foodsListSelected, setFoodsListSelected] = useState([]);
  const [macros, setMacros] = React.useState({energia: 0.0, proteina: 0.0, gordura: 0.0, carboidrato: 0.0});
  const [searchValue, setSearchValue] = useState("");
  
  // useEffect(() => {
  //   async function fetchData() {
  //     const client = new FoodClient();
  //     const data = await clienlinhaMacroGrapht.getFoods();
  //     setFoodsList(Object.entries(data));      
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      await calMacros()
    };
    fetchData();
  }, [foodsListSelected]);


  const handleAddItem = (value) => () => {
    const newFoodsListSelected = [...foodsListSelected];
    
    const alimento = foodsList[value][0];
    const { energia, proteina, gordura, carboidrato } = foodsList[value][1];
    const selected = [
                       alimento, 
                       { porcao: 100, energia: energia, gordura: gordura, carboidrato: carboidrato, proteina: proteina },
                       { porcaoOriginal: 100, energiaOriginal: energia, gorduraOriginal: gordura, carboidratoOriginal: carboidrato, proteinaOriginal: proteina }
                    ];

    newFoodsListSelected.push(selected)
    setFoodsListSelected(newFoodsListSelected);
  };

  const handleDeleteItem = (index) => {
    const newFoodsListSelected = _.clone(foodsListSelected);
    newFoodsListSelected.splice(index, 1);
    setFoodsListSelected(newFoodsListSelected);    
  }

  const handleChangePorcao = (index, value) => {
    const newFoodsListSelected = _.clone(foodsListSelected);
    const { energiaOriginal, proteinaOriginal, gorduraOriginal, carboidratoOriginal } = newFoodsListSelected[index][2]; 
    const changed = {   porcao: value, 
                        energia: calcValorPorPorcao(energiaOriginal, value), 
                        gordura: calcValorPorPorcao(gorduraOriginal, value),
                        carboidrato: calcValorPorPorcao(carboidratoOriginal, value),
                        proteina: calcValorPorPorcao(proteinaOriginal, value),
                      };
                    
    newFoodsListSelected[index][1] = changed;
    setFoodsListSelected(newFoodsListSelected);    
  }

  const calcValorPorPorcao = (valor, porcao = 100) => {    
    if(valor && porcao){
      const valorParsed = typeof valor === 'string' ? valor.replace(',','.') : valor;
      return parseFloat(porcao) / 100 * valorParsed;
    }
    return 0;    
  } 

  const calMacros = () => {
    if(foodsListSelected.length > 0){
      var energia = foodsListSelected.reduce((accum,item) => accum + parseFloat(item[1].energia), 0);
      var proteina = foodsListSelected.reduce((accum,item) => accum + parseFloat(item[1].proteina), 0);
      var gordura = foodsListSelected.reduce((accum,item) => accum + parseFloat(item[1].gordura), 0);
      var carboidrato = foodsListSelected.reduce((accum,item) => accum + parseFloat(item[1].carboidrato), 0);

      setMacros({
        energia: energia, 
        proteina: proteina, 
        gordura: gordura, 
        carboidrato: carboidrato
      });
    }else{
      setMacros({energia: 0.0, proteina: 0.0, gordura: 0.0, carboidrato: 0.0});
    }    
  }

  const itemDisabled = (value) => {
    return foodsListSelected.filter(item => item[0] === value).length > 0 ;
  }

  const inputSearchChange = async (event) => {
    const searchTerm = event.target.value;
    setSearchValue(searchTerm);
    
    if(searchTerm.length >= 3){
      const client = new FoodClient();
      const data = await client.searchFoods(searchTerm.toUpperCase());
      setFoodsList(Object.entries(data));
    }    
  };

  const showFoodData = (value) => {
    const energia = parseFloat(value.energia).toFixed(2);
    const proteina = parseFloat(value.proteina).toFixed(2);
    const gordura = parseFloat(value.gordura).toFixed(2);
    const carboidrato = parseFloat(value.carboidrato).toFixed(2);

    return (
      <>
        <span className={classes.linhaMacro}>calorias:<br/><b>{energia}</b></span>
        <span className={classes.linhaMacro}>proteína:<br/><b>{proteina}</b></span>
        <span className={classes.linhaMacro}>gordura:<br/><b>{gordura}</b></span>
        <span className={classes.linhaMacro}>carboidrato:<br/><b>{carboidrato}</b></span>
      </>    
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3>Lista de alimentos</h3>
            <div className={classes.search}>
              <InputBase
                placeholder="Busca…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={searchValue}
                onChange={(e) => inputSearchChange(e)}
                inputProps={{ "aria-label": "search" }}
              />
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
            </div>
            <div className={classes.list}>
              {foodsList.map(([key, value], index) => {
                const itemKey = `Item-${index}-${key}`;
                return (
                  <div key={itemKey} className={classes.item}>
                    <div className={classes.itemWrapper}>
                      <div className={classes.itemListText}>
                        <h3 className={classes.itemTextTitle}>{key}</h3>                                          
                         <IconButton disabled={itemDisabled(key)} aria-label="add" onClick={handleAddItem(index)}>
                          <AddCircleIcon />
                        </IconButton>
                      </div>                      
                    </div>
                    <div className={classes.macros}>
                      {showFoodData(value)}
                    </div>
                  </div>
                );
              })}
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3>Refeição</h3>
            <div className={classes.list}>
              {foodsListSelected.map(([key, value], index) => {
                const textFieldId = `TextField-${index}-${key}`;
                const itemKey = `Item-${index}-${key}`;
                return (
                  <div key={itemKey} className={classes.item}>
                    <div className={classes.itemWrapper}>
                      <div className={classes.itemText}>
                        <h3 className={classes.itemTextTitle}>{key}</h3>                                          
                      </div>
                      <div className={classes.itemActions}>
                        <div className={classes.campoPorcao}>
                          <TextField width="100px" id={textFieldId} label="Porção(g)" onChange={(e) => handleChangePorcao(index, e.target.value)} defaultValue={value.porcao} />                      
                        </div>
                        <IconButton aria-label="delete" onClick={()=> handleDeleteItem(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                    <div className={classes.macros}>
                      {showFoodData(value)}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={classes.footerList}>
              <Button variant="contained" color="secondary" size="small" className={classes.button} startIcon={<SaveIcon />}>
                salvar refeição
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3>Resumo nutricional</h3>
            <h4 className={classes.titleGraph}>calorias:<br/><b>{parseFloat(macros.energia).toFixed(2)}</b></h4>
            <ChartDoughnut macros={macros} />
            <div className={classes.macrosGraph}>
              <p className={classes.linhaMacroGraph}>proteína:<br/><b>{parseFloat(macros.proteina).toFixed(2)}</b></p>
              <p className={classes.linhaMacroGraph}>gordura:<br/><b>{parseFloat(macros.gordura).toFixed(2)}</b></p>
              <p className={classes.linhaMacroGraph}>carboidrato:<br/><b>{parseFloat(macros.carboidrato).toFixed(2)}</b></p>
            </div>
          </Paper>
        </Grid>        
      </Grid>      
    </div>    
  );
}
export default Home;