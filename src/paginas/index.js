import React, {useState, useEffect} from 'react'
import MenuSuperior from "../componentes/menuSuperior"
import { Line } from 'react-chartjs-2'

const getDataCons = () => ({
    labels: [' - ',' - '],
    datasets: [
      {
        label: 'Quarto 1',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Quarto 2',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },      
      {
        label: 'Sala',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },       
      {
        label: 'Cozinha',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },        
    ],
  });

const getDataTemp = () => ({
    labels: [' - ',' - '],
    datasets: [
      {
        label: 'Quarto 1',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Quarto 2',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },      
      {
        label: 'Sala',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },       
      {
        label: 'Cozinha',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },        
    ],
  });
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };     


const Inicio  = () => { 
    const [itemsCons, setItemsCons] = useState([
        {
            idx: 0,
            'nome': 'Quarto 1',
            ctrl: 0,
            status: false
        },
        {
            idx: 1,
            'nome': 'Quarto 2',
            ctrl: 0,
            status: false
        },
        {
            idx: 2,
            'nome': 'Sala',
            ctrl: 0,
            status: false
        },
        {
            idx: 3,
            'nome': 'Cozinha',
            ctrl: 0,
            status: false
        }
    ]);

    const [itemsTemp, setItemsTemp] = useState([
        {
            'nome': 'Quarto 1',
            ctrl: 0,
            status: false
        },
        {
            'nome': 'Quarto 2',
            ctrl: 0,
            status: false
        },
        {
            'nome': 'Sala',
            ctrl: 0,
            status: false
        },
        {
            'nome': 'Cozinha',
            ctrl: 0,
            status: false
        }
    ]);

    const atualizarValor = (valor, index, cat) =>{ 
        
      
      if (cat == 'temp'){
        const auxItems = itemsTemp
        auxItems[index].ctrl = auxItems[index].ctrl + valor 
        const maior = Math.max(...auxItems.map(e=> e.ctrl))

            auxItems.map((e)=> {
                e.status = e.ctrl === maior || false
                return e
            })
            
            
            setItemsTemp([...auxItems])            
        }else {
            const auxItems = itemsCons
            if(valor < 0 && auxItems[index].ctrl == 0)
                return            
            auxItems[index].ctrl = auxItems[index].ctrl + valor 
            const maior = Math.max(...auxItems.map(e=> e.ctrl))

            auxItems.map((e)=> {
                  e.status = e.ctrl === maior || false
                  return e
            })

            auxItems[index].ctrl = auxItems[index].ctrl + valor 
            setItemsCons([...auxItems])            
        }
    }

    const [data, setData] = useState(getDataTemp());
    const [dataCons, setDataCons] = useState(getDataCons());

    useEffect(() => {
      const interval = setInterval(() => {
          /***** INICIO DATA TEMPERATURA ******/
          const temp = data 
          itemsTemp.map((e,i)=>{
              temp.datasets[i].data.push(e.ctrl)
          })
          temp.labels.push(' - ')

          setData([])
          setData(temp)
          /***** FIM  ******/
          /***** INICIO DATA CONSUMO ******/
          const tempCons = dataCons 
          itemsCons.map((e,i)=>{
              tempCons.datasets[i].data.push(e.ctrl)
          })
          tempCons.labels.push(' - ')

          setDataCons([])
          setDataCons(tempCons)  
          /***** FIM  ******/

    }, 10000);
  
      return () => clearInterval(interval);
    }, []);

    const ItemDom = (props) => {
        const lista = props.lista
        const categoria = props.categoria
        return (
            lista.map((e,i) => 
                <li className="list-group-item d-flex justify-content-between align-items-start" key={i}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{e.nome}</div>
                    </div>
                    {(
                      () => {
                        if(!e.status) { 
                          return <span className="badge bg-primary rounded-pill">{e.ctrl}</span>
                        }else{
                          return <span className="badge bg-danger rounded-pill">{e.ctrl}</span>
                        }
                      }
                    ) ()}

                    <div style={{marginLeft: '15px'}}>
                        <button type="button" className="btn btn-outline-info btn-sm"  onClick={() => atualizarValor(1,i,categoria)}>
                            <i className="bi bi-plus-circle"></i>
                        </button>
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => atualizarValor(-1,i, categoria)}>
                            <i className="bi bi-dash-circle"></i>
                        </button>
                    </div>                    
                </li>
            )
        )
    }

    const Card = (props) => { 
        return (
            <div className="card" style={{height:"100%"}}>
                <div className="card-header">
                    {props.tittle}
                </div>
                <div className="card-body">
                    <Line data={props.data} options={options} height={50} />
                </div>
            </div>
        )
    }
   

    return (
        <div>
            <MenuSuperior />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <ol className="list-group">
                            <li className="list-group-item disabled text-center" aria-disabled="true">
                                <b>Temperatura</b>
                            </li>
                            <ItemDom lista={itemsTemp} categoria={'temp'}/>
                        </ol>
                    </div>
                    <div className="col-9">
                            <Card tittle={'Gráfico Temperatura'} data={data}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <ol className="list-group">
                                <li className="list-group-item disabled text-center" aria-disabled="true">
                                    <b>Consumo KWh</b>
                                </li>
                                <ItemDom lista={itemsCons} categoria={'cons'}/>                        
                            </ol>
                        </div>
                        <div className="col-9">
                            <Card tittle={'Gráfico Consumo'} data={dataCons} />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Inicio
