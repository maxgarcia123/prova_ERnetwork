import React, { useState } from "react";
import '../../styles/form.css'
import api from '../../services/api'

function SignupCidades() {
           const[name,setName] = useState('');
           const[uf,setUf] = useState('');
           const[codigo,setCodigo] = useState('');
           
           async function handleSubimit(e) {
              e.preventDefault(); 
              const response = await api.post('./Cidade',{
                  name,
                  uf,
                  codigo
              })
              console.log(response.data);
           }
           async function findSubimit(e) {
            e.preventDefault(); 
            const response = await api.get('./Cidade',{
                name,
                uf,
                codigo
            })
            console.log(response.data);
         }


          return(
              <div className="container col-10 col-md-6 col-lg-4 formsigup" >

                    <div className="row">
                    
                    <div className="col-12 text-center my-5">
                        <h1 className="display-6 fonte" style={{color:"black"}}> Cadastro de cidades</h1>
                    </div>

                    </div>

                    <div className="row mb-5">
                       <div className="col-12 ">
                         
                           <form style={{height:"400px"}} onSubmit={handleSubimit}>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        
                                        <label htmlFor="inputName" className="fonte">Nome da cidade</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="nome da cidade" 
                                        required value={name} onChange={e =>setName(e.target.value)} name="name"></input>
                                    </div>
                                    <div className="form-group col-12">
                                            <label htmlFor="inputUF" className="fonte">UF</label>
                                            <input type="text" className="form-control" placeholder="EX: Mato Grosso =(MT)" 
                                             required value={uf} onChange={e =>setUf(e.target.value)} name="uf"></input>
                                    </div>
                                    
                                    <div className="form-group col-12">
                                            <label htmlFor="inputCodigo3" className="fonte">Codigo</label>
                                            <input type="number" className="form-control" placeholder="Codigo" 
                                             required value={codigo} onChange={e =>setCodigo(e.target.value)} name="codigo"></input>
                                    </div>
                                </div>  
                                <button type="submit" className="btn btn-primary">Cadastrar</button>
                                </form>


                                <form onSubmit={findSubimit}>
                                    <div className="row">
                        
                                        <div className="col-12 text-center my-3">
                                            <h1 className="display-8 fonte" style={{color:"black"}}>Consulta</h1>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="col-7">
                                        <input type="text" className="form-control" placeholder="Cidade"
                                         required value={name} onChange={e =>setName(e.target.value)} name="name"/>
                                        </div>
                                        <div className="col">
                                        <input type="text" className="form-control" placeholder="UF"
                                         required value={uf} onChange={e =>setUf(e.target.value)} name="uf"/>
                                        </div>
                                        <div className="col">
                                        <input type="text" className="form-control" placeholder="Codigo"
                                         required value={codigo} onChange={e =>setCodigo(e.target.value)} name="codigo"/>
                                        </div>
                                    </div>
                                     <div className="my-3">
                                        <button type="submit" className="btn btn-primary">Consultar</button>
                                    </div>
                                    <div className="form-row my-3">
                                       <label htmlFor="inputCodigo3" className="fonte">Resultado</label>
                                        <div className="col-4">
                                        <input type="text" className="form-control" placeholder="cidade" name="name"
                                        required value={name} onChange={e =>setName(e.target.value)}/>
                                        </div>
                                        <div className="col">
                                        <input type="text" className="form-control" placeholder="UF" name="uf"
                                        required value={uf} onChange={e =>setUf(e.target.value)} />
                                        </div>
                                        <div className="col">
                                        <input type="text" className="form-control" placeholder="Codigo"name="codigo"
                                          required value={codigo} onChange={e =>setCodigo(e.target.value)}/>
                                        </div>
                                    </div>
                                        
                                </form>

                       </div> 
                    </div>
              </div>
              
          )
      }
    
export default SignupCidades;