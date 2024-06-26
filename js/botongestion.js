
function enableGestion(ticket,tipoATC,user){


    //dibujar tabla botones
    const response = chrome.runtime.sendMessage({gestionTicket:ticket});
    $('#menu2').hide();
    $('#menu3').hide();
    $('#menu4').hide();
    $('#menu5').hide();
    $('#menu6').hide();
    $('#menu7').hide();
    let sgmto =document.getElementById('customfield_10324-val');
    var segmento=sgmto.children[0].children[0].innerText.trim();
    var elemgestion = document.getElementById("div_gestionTicket");
    if(elemgestion == null){
    $('#datosapimodule').append(`<div id='div_gestionTicket'></div>`);

        let htmlplantillasR=(`
            <div class="footdcha id="piedcha" style="display:inline;">   
                <table>
                    <tr>
                        <td class="plantillaC"><label id="lcierres" style="margin-left:450px;width:100px;" for="cierres">Plantilla Cierres</label></td>
                        <td><select id="cierres" name="select">
                        <option value="0">Elige plantilla</option>
                        <option value="1">Resueltos tras segundo contacto</option>
                        <option value="2">Resuelto 1er intento</option>
                        <option value="3">Desestimada</option>
                        <option value="4">Desestimada Anterior</option>
                        <option value="5">Desestimada. Def comercial</option>
                        <option value="6">Desestimada tras llamada</option>
                        <option value="7">A favor. Dev. en cuenta</option>
                        <option value="8">A favor. Devolución en factura</option>
                        <option value="9">A favor. Dev. Fra + Dev. cuenta</option>
                        <option value="10">A favor. Devolución en cuenta con deuda</option>
                        <option value="11">A favor. Se aplica descuento</option>
                        <option value="12">A favor. Se aplica descuento + Dev. Factura</option>
                        <option value="13">A favor. Se aplica descuento + Dev. Cuenta</option>
                        <option value="14">MALWARE</option>
                        <option value="15">Llamadas Premium</option>
                        <option value="16">Poner perman y devolución</option>
                        <option value="17">A favor sin devolución</option>
                        <option value="18">Devolucion Penalizacion Otro Operador</option>
                        </select></td>
                        <td class="btnC"><input style="background-color:#5AB0E2;color:white; font-weight:bold;" type="button" class="pie env" id ="btnenviar" value="Enviar"/></td>
                    </tr>
                </table>    
            </div>
            `);
        
            let htmlplantillasN=(`
            <div class="footdcha id="piedcha" style="display:inline;">   
                <table>
                    <tr>
                        <td class="plantillaC"><label id="lcierres" style="margin-left:450px;width:100px;" for="cierres">Plantilla Cierres</label></td>
                        <td><select id="cierres" name="select">
                        <option value="0">Elige plantilla</option>
                        <option value="1">Resueltos tras segundo contacto</option>
                        <option value="2">Resuelto 1er intento</option>
                        <option value="3">CIERRE SIN EVIDENCIAS</option>
                        <option value="4">Desestimada</option>
                        <option value="5">Desestimada tras contacto telefónico</option>
                        <option value="6">A favor.Devolución en cuenta</option>
                        <option value="7">A favor.Devolución en cuenta con deuda</option>
                        <option value="8">A favor.Devolución en factura</option>
                        <option value="9">A favor.Devolución en factura + devolución cuenta</option>
                        <option value="10">A favor.Se aplica descuento</option>
                        <option value="11">A favor.Se aplica descuento + dev. Factura</option>
                        <option value="12">A favor.Se aplica descuento + dev. Cuenta</option>
                        <option value="13">A favor.Sin devolucion</option>
                        <option value="14">SMS MALWARE</option>
                        <option value="15">Reclamación desestimada anterior</option>
                        <option value="16">Distribuidor ha contactado con cliente</option>
                        <option value="17">Documentación Pendiente Cliente</option>
                        <option value="18">Oferta mal aplicada YG NEGOCIO</option>
                        <option value="19">Oferta mal aplicada MM NEGOCIO</option>
                        <option value="20">Devolución Penalización Otro Operador</option>
                        </select></td>
                        <td class="btnC"><input style="background-color:#5AB0E2;color:white; font-weight:bold;" type="button" class="pie env" id ="btnenviar" value="Enviar"/></td>
                    </tr>
                </table>    
            </div>
            `);
        let htmlGestion=(`
        <div  class="contenedor" id="contenedor" style="display:inline-flex;">
            <div class="menulado" id="menulado" style="display:block;width:40%;">
                <table>

                    <tr>
                        <td><label id="lref" style="margin-left:5px;width:100px;" for="ref">Ref.BO </label></td><td><select id="tipologias" name="select">
                        <option value="R_001">Servicio Interrupción(R_001)</option>
                        <option value="R_003">Oferta Mal Aplicada(R_003)</option>
                        <option value="R_005">Desacuerdo Compra de Contenido(R_005)</option>
                        <option value="R_006">Desacuerdo con Penalización(R_006)</option>
                        <option value="R_007">Desacuerdo con Bono(R_007)</option>
                        <option value="R_008">Permanencia Mal Aplicada(R_008)</option>
                        <option value="R_011">Baja No realizada(R_0011)</option>
                        <option value="R_012">Problemas con las recargas(R_012)</option>
                        <option value="R_013">Baja No solicitada(R_013)</option>
                        <option value="R_015">Pedido - Problemas con el pedido(R_015)</option>
                        <option value="R_016">Devolución Pendiente(R_016)</option>
                        <option value="R_019">Desacuerdo con SMS(R_0019)</option>
                        <option value="R_020">Desacuerdo Cobro Vista Técnico(R_0020)</option>
                        <option value="R_023">Cambio de titular no realizado(R_023)</option>
                        <option value="R_027">Desacuerdo con cobro duplicado de SIM(R_027)</option>
                        <option value="R_038">Desacuerdo Cuota TV(R_038)</option>
                        <option value="R_039">Fijo - Cambio de domicilio(R_039)</option>
                        <option value="R_041">Bloqueo por IMEI(R_041)</option>
                        <option value="R_052">Desacuerdo Llamadas(R_0052)</option>
                        <option value="R_053">Desacuerdos - Desacuerdo con Datos(R_053)</option>
                        <option value="R_054">Desacuerdos - Cuota incorrecta(R_054)</option>
                        <option value="R_056">Baja -  Cancelación no realizada / Solicitada(R_056)</option>
                        <option value="R_057">Desacuerdos - -Desacuerdo con la financiación(R_057)</option>
                      </select></td></td>
                    </tr>
                    <tr>
                        <td><label id="lvendedor" style="margin-left:5px;width:100px;" for="Vendedor">Vendedor </label></td><td><input  type="text" class="textoTicket" id ="vendedor"/></td>
                    </tr>
                    <tr>
                        <td><label id="ltfcontacto" style="margin-left:5px;width:100px;" for="tfcontacto">Teléfono de Contacto: </label></td><td><input  type="text" class="textoTicket" id ="tfcontacto"/></td>
                    </tr>
                    <tr>
                        <td><label id="lcallclte" style="margin-left:5px;width:100px;" for="callclte">Llamada cliente: </label></td><td ><input  style="background-color:#f0f2f3;color:black; font-weight:bold;" type="button" class="callclte" id ="btncltesi" value="Si"/><input  style="background-color:#26BD73;color:white;font-weight: bold;" type="button" class="callclte" id ="btnclteno" value="No"/></td>
                    </tr>
                    <tr>
                        <td><label id="lprocap" style="margin-left:5px;width:100px;" for="procap">Procede Apertura: </label></td>
                        <td><select id="procap" name="procap">
                        <option value="">Elige Opción</option>
                        <option value="Sí">Si</option>
                        <option value="No">No</option></select></td>
                    </tr>
                    <tr>
                        <td><label id="ltipoap" style="margin-left:5px;width:100px;" for="tipoap">Tipo Apertura: </label></td>
                        <td><div id="divtipoap"><select id="tipoap" name="tipoap">
                        <option value="">Elige Opción</option>
                        <option value="Importe elevado">Importe elevado</option>
                        <option value="Solucionar FO">Solucionar FO</option>
                        <option value="Escalado correcto al BO">Escalado correcto al BO</option></select></div></td>
                    </tr>
                    <tr>
                        <td><label id="larea" style="margin-left:5px;width:100px;" for="area">Area Causante: </label></td>
                        <td><select id="area" name="area">
                        <option value="">Elige Opción</option>
                        <option value="Cancelaciones">Cancelaciones</option>
                        <option value="Caso Sensible">Caso Sensible</option>
                        <option value="Chat ATC">Chat ATC</option>
                        <option value="Cobros">Cobros</option>
                        <option value="Retención/Bajas">Retención/Bajas</option>
                        <option value="Control de servicio">Control de servicio</option>
                        <option value="Distribuidor/Tienda">Distribuidor/Tienda</option>
                        <option value="Error Agente">Error Agente</option>
                        <option value="Error Cliente">Error Cliente</option>
                        <option value="Error Sistemas">Error Sistemas</option
                        <option value="Fidelización">Fidelización</option>
                        <option value="IVR">IVR</option>
                        <option value="Mail ATC">Mail ATC</option>
                        <option value="N/A">N/A</option>
                        <option value="Redes Sociales ATC">Redes Sociales ATC</option>
                        <option value="Soporte a canal">Soporte a canal</option>
                        <option value="Soporte Técnicofijo/TV/Móvil">Soporte Técnicofijo/TV/Móvil</option>
                        <option value="Ventas">Ventas</option>
                        <option value="Web">Web</option>
                        <option value="Área Personal">Área Personal</option></select></td>
                    </tr>
                    <tr>
                        <td><label id="lcatsubcat" style="margin-left:5px;width:100px;" for="catsubcat">Error Categoría/Subcategoría: </label></td>
                        <td><select id="catsubcat" name="catsubcat">
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                        </select></td>
                    </tr>
                    <tr>

                    <td><label id="lcatcierre" for="catcierre"> &nbsp Categoria de cierre : &nbsp </label></td>
                    <td>
                    <select id="catcierre" name="catcierre">
                    <option value="">Elige Opción</option>
                    <option value="Cliente tiene razón">Cliente tiene razón</option>
                    <option value="Cliente no tiene razón">Cliente no tiene razón</option>
                    <option value="No sé si el cliente tiene razón">No sé si el cliente tiene razón</option>
                    <option value="Cliente parcialmente tiene razón">Cliente parcialmente tiene razón</option>
                    </td>
                    </tr>
                    <tr>
                    <td><label id="lsubcatcierre" for="subcatcierre"> &nbsp Subcategoria de cierre : &nbsp </label></td>
                    <td><div id="divsubcat">
                    <select id="subcatcierre" name="subcatcierre">
                        <option value="">Elige Opción</option>
                        <option value="Condiciones mal informadas">Condiciones mal informadas</option>
                        <option value="Error Agente">Error Agente</option>
                        <option value="Venta fraudulenta">Venta fraudulenta</option>
                        <option value="No existen evidencias">No existen evidencias</option>
                    </select></div></td>
                    </tr>
                    <tr>
                    <td><label id="lrecl" for="recl"> &nbsp Reclamación no computable : &nbsp </label></td>
                        <td>
                        <select id="recl" name="recl">
                        <option value="">Elige Opción</option>
                        <option value="Ninguno">Ninguno</option>
                        <option value="Sin acción">Sin acción</option>
                        <option value="Tiempo excesivo de terceros">Tiempo excesivo de terceros</option>
                        <option value="Deferencia comercial">Deferencia comercial</option>
                        <option value="Sin reclamación de cliente">Sin reclamación de cliente</option>
                        <option value="Terminal">Terminal</option>
                        <option value="SVA">SVA</option>
                        </td>
                    
                    
                    </tr>

                    
                    
                </table>
                <div id="infouser"></div>
            </div>
            <div class="menuTicket" id="menuTicket" style="display:block;width:60%;margin-top:5px;">
               
                <div class="menuTicket opciones1" id="opciones1" style="display:block">
                    <table>
                        <tr>
                            <td><input  type="button" class="app vista" id ="btnvista" value="VISTA" /></td>
                            <td><input  type="button" class="app tgjira" id ="btntgjira"" value="TGJIRA" /></td>
                            <td><input  type="button" class="app dvpass" id ="btndvpass" value="DVPASS" /></td>
                            <td><input  type="button" class="app buhonet" id ="btnbuhonet" value="BUHONET" /></td>
                            <td><input  type="button" class="app genesis" id ="btngenesis" value="GENESYS" /></td>
                            <td><input  type="button" class="app jiraam" id ="btnjiraam" value="JIRA AMAR." /></td>
                            <td><input  type="button" class="app jiranext" id ="btnjiranext" value="JIRA NEXT" /></td>
                            <td><input  type="button" class="app 360" id ="btn360" value="360" /></td>  
                        </tr>
                        <tr>
                            <td><input  type="button" class="app koala" id ="btnkoala" value="KOALA" /></td>
                            <td><input  type="button" class="app agiletv" id ="btnagiletv"" value="AGILETV" /></td>
                            <td><input  type="button" class="app mysim" id ="btnmysim" value="MYSIM" /></td>    
                            <td><input  type="button" class="app massos" id ="btnmasoss" value="MASSOS" /></td>
                            <td><input  type="button" class="app orderbox" id ="btnorderbox" value="ORDERBOX" /></td>
                            <td><input  type="button" class="app kairos" id ="btnkairos" value="KAIROS" /></td>
                            <td><input  type="button" class="app data" id ="btndata" value="DATA" /></td>
                            <td><input  type="button" class="app timon" id ="btntimon" value="TIMON" /></td>
                        </tr>    
                        <tr>
                            <td><input  type="button" class="app lola" id ="btnlola" value="LOLA" /></td>
                            <td><input  type="button" class="app tms" id ="btntms" value="TMS" /></td>
                            <td><input  type="button" class="app mosaico" id ="btnmosaico" value="MOSAICO" /></td>
                            <td><input  type="button" class="app schaman" id ="btnschaman" value="SCHAMAN" /></td>        
                        
                        </tr>
                        
                    </table>
                </div>
                <div class="menuTicket opciones2" id="opciones2" style="display:block;margin-top:10px;">
                <table>
                    <tr>
                        <td><input  type="button" class="opc sok" id ="btnSOK"" value="SOK" /></td>
                        <td><input  type="button" class="opc pecb" id ="btnPECB" value="PECB" /></td>
                        <td><input  type="button" class="opc buzond" id ="btnBUZOND" value="BUZOND" /></td>
                        <td><input  type="button" class="opc duplicado" id ="btnDUPLICADO" value="DUPLICADO" /></td>
                        <td><input  type="button" class="opc ofinex" id ="btnOFERTAINEXISTENTE" value="OFERTAINEXISTENTE" /></td>
                        <td><input  type="button" class="opc nacb" id ="btnNACB" value="NACB" /></td>     
                    </tr>
                    <tr>
                        <td><input  type="button" class="opc smscb" id ="btnSMSCB"" value="SMSCB" /></td>
                        <td><input  type="button" class="opc prueba" id ="btnPRUEBA" value="PRUEBA" /></td>
                        <td><input  type="button" class="opc pruebacb" id ="btnPRUEBACB" value="PRUEBACB" /></td>
                        <td><input  type="button" class="opc teccb" id ="btnTECNICOCB" value="TECNICOCB" /></td>
                        <td><input  type="button" class="opc tarcb" id ="btnTAR_CB" value="TAR_CB" /></td>
                        <td><input  type="button" class="opc 2lcb" id ="btn2l_CB" value="2l_CB" /></td>              
                    </tr>
                    <tr>
                        <td><input  type="button" class="opc sko" id ="btnSKO" value="SKO" /></td>
                        <td><input  type="button" class="opc comfo" id ="btnDEF_COM_FO" value="DEF_COM_FO" /></td>
                        <td><input  type="button" class="opc ricb" id ="btnRICB" value="RICB" /></td>
                        <td><input  type="button" class="opc otb" id ="btnOTBAJACB" value="OTBAJACB" /></td>
                        <td><input  type="button" class="opc idcn" id ="btnIDCB"" value="IDCB" /></td>
                        <td><input  type="button" class="opc pendsim" id ="btnPENDSIM" value="PENDSIM" /></td>      
                    </tr>
                    <tr>
                        <td><input  type="button" class="opc malware" id ="btnMALWARE" value="MALWARE" /></td>
                        <td><input  type="button" class="opc maicb" id ="btnMAIL_CB" value="MAIL_CB" /></td>
                        <td><input  type="button" class="opc pfcb" id ="btnPFCB" value="PFCB" /></td>    
                        <td><input  type="button" class="opc cbv" id ="btnCBV" value="CBV" /></td>
                        <td><input  type="button" class="opc 1lcb" id ="btn1L_CB" value="1L_CB" /></td>
                        <td><input  type="button" class="opc pendstc" id ="btnPENDSTC" value="PENDSTC" /></td>  
                    </tr>
                    <tr>
                        <td><input  type="button" class="opc errorlinea" id ="btnERROR_EN_LINEA" value="ERROR_EN_LINEA" /></td>
                        <td><input  type="button" class="opc homego" id ="btnHOMEGO" value="HOMEGO" /></td>
                        <td><input  type="button" class="opc mailcb" id ="btnMAILCB" value="MAILCB" /></td>
                        <td><input  type="button" class="opc crazon" id ="btnClienteRazon" value="ClienteRazon" /></td>
                        <td><input  type="button" class="opc secb" id ="btnSECB" value="SECB" /></td> 
                        <td><input  type="button" class="opc tms2" id ="btnTMS" value="TMS" /></td>
                    </tr>
                    <tr>
                        <td><input  type="button" class="opc rmgcb" id ="btnRMGCB" value="RMGCB" /></td>
                        <td><input  type="button" class="opc hracb" id ="btnHRACB" value="HRACB" /></td>
                        <td><input  type="button" class="opc slesc" id ="btnSOLICITUDESCUCH" value="SOLICITUDESCUCHA" /></td> 
                        <td><input  type="button" class="opc ocuweb" id ="btnOCUWEB" value="OCUWEB" /></td>
                        <td><input  type="button" class="opc seguro" id ="btnSEGUROMOVIL_DKV" value="SEGUROMOVIL_DKV" /></td>
                        <td><input  type="button" class="opc repo" id ="btnREPO" value="REPO" /></td>
                    </tr>
                    <tr>
                        <td><input  type="button" class="opc atp" id ="btnATP" value="ATP" /></td>
                        <td><input  type="button" class="opc fterminal" id ="btnFTERMINAL" value="FTERMINAL" /></td>
                        <td><input  type="button" class="opc cnorazon" id ="btnClienteNoRazon" value="ClienteNoRazon" /></td>
                        <td><input  type="button" class="opc atp" id ="btnATPNEG" value="ATPNEG" /></td>
                        <td><input  type="button" class="opc robotcb" id ="btnROBOTCD" value="ROBOTCD" /></td>
                    
                    </tr>
                </table>
                </div>                   
            </div>   
        </div>
        <div class="descripcion" id="descripcion" style="display:inline-flex;">
            <table>
              <tr>
              <td><label id="lacciones" for="acciones"><h2>Acciones Realizadas</h2></label></td>
              <td><label id="lprev" for="prev"><h2>Previsualización comentario</h2></label></td>
              <td class="tcomunicado"><label id="lecomunicado" for="Ecomunicado"><h2>Comunicado cliente (Email)</h2></label></td>
              <td class="tcomunicado"><label id="lscomunicado" for="Scomunicado"><h2>Comunicado cliente (SMS)</h2></label></td>
              </tr>
              <tr>
              <td><textarea id="acciones" name="acciones" rows="6" cols="60" required></textarea></td>
              <td><textarea id="prev" name="prev" rows="6" cols="60"></textarea></td>
              <td class="acomunicado"><textarea id="Ecomunicado" name="Ecomunicado" rows="6" cols="60"></textarea></td>
              <td class="acomunicado"><textarea id="Scomunicado" name="Scomunicado" rows="6" cols="60"></textarea></td>
              </tr>
            </table>
             
        </div>

        <div class="contfoot" id="contpie"  style="display:inline-flex;width:100%;">
            <div class="footizq" id="pieizq" style="display:block;">
                <table>
                    
                    <tr>
                        <td><label id="lclnr" style="margin-left:5px;width:80px;" for="clnr">Plantilla acciones realizadas </label></td>
                        <td><select id="placcion" name="select">
                        <option value="">Elige Accion</option>
                        <option value="2I_CB">2º intento llamada</option>
                        <option value="SOLICITUDESCUCHAN">Feeback Negocio</option>
                        <option value="SOLICITUDESCUCHAR">Feeback Residencial</option>
                        <option value="Contacto fuera horario">Contacto fuera horario</option>
                        <option value="OFERTA_INEXISTENTE">Oferta Inexistente</option>
                        <option value="DEF_COM_FO">Deferencias comerciales que hace el front</option>
                        <option value="SECB">2º escalado de negocio</option>
                        <option value="EVCB">Pdte de recibir evidencias</option>
                        <option value="ROBOTCB">Tiene robot</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td><label id="lcorreo" style="margin-left:5px;width:80px;" for="correo">Correo </label></td><td><input  type="text" class="textoTicket" id ="correo"/><input  type="checkbox" class="correocheck" id ="correocheck"/></td>
                    </tr>
                    <tr>
                        <td><label id="ltfno" style="margin-left:5px;width:80px;" for="tfno">SMS </label></td><td><input  type="text" class="textoTicket" id ="tfno"/><input  type="checkbox" class="tfnocheck" id ="tfnocheck"/></td>
                    </tr>
                    <tr>
                    <td><label id="int" style="margin-left:5px;width:80px;" for="clnr">Intentos </label><label class="numtint" id="numint" style="font-weight:bold;">0</label><span>&nbsp&nbsp&nbsp</span><input type="button" class="masint" id="btnmasint" value="+"><input type="button" class="masint" id="btnmenint" value="-"></td>
                    </tr>
                    <tr>
                        <td><label id="ltrans" style="margin-left:5px;width:100px;" for="transferida">Transferida </label></td><td ><input  style="background-color:#f0f2f3;color:black; font-weight:bold;" type="button" class="transferida" id ="btntransfsi" value="Si"/><input  style="background-color:#26BD73;color:white;font-weight: bold;" type="button" class="transferida" id ="btntransfno" value="No"/></td>
                    </tr>
                    
                </table>
            </div>`);
        if(segmento=="Residencial"){
            htmlGestion+= htmlplantillasR;
        }else{
            htmlGestion+=htmlplantillasN;
        }  
        htmlGestion+=(`    
        </div>
        <div class="gestion" id="gestion"  style="display:inline;">
            <table style="position: relative;left: 25%;">
            <tr>
                <td class="btnG"><input style="background-color:#5AB0E2;color:white; font-weight:bold;width:150%;" type="button" class="btnsave" id ="btnsave" value="Gestionar Ticket" /></td>
            </tr>
            </table>
        </div>

        `)

    $('#div_gestionTicket').append(htmlGestion);

    }else{ 
        if($("#div_gestionTicket").is(":visible")){
            $("#div_gestionTicket").hide();
        }else{   
            $("#div_gestionTicket").show();
        }

    }



 //Gestionar colores + toggle  de botones
 let stateInc; 
 let apps=[];
 let opciones=[];
 let etiquetas=[];
 //let inicio=[];
 let callclte="No" //el valor tiene que ser exactamente asi para poder actualizarlo (No/Si)
 let transferida="Si";
 let catsubcat="No";
 let catcierre;
 //let subcatcierre;
 let intentos="";
 let myemail='';
 let mytfno;
 let tfcontacto;
 let idvendedor='';
 let tipoBO="";
 //let llamada="NO";
 let acciones="";
 let appfield="";
 let dni="";
 //let contrato="";
 let startticket;
 let fcreacion;
 let fhoy10=moment().subtract(10, 'days').format('YYYY-MM-DD 00:00:00');//Autonomo-Empresa
 let fhoy15=moment().subtract(15,'days').format('YYYY-MM-DD 00:00:00');//Residencial
 let rboArr=[
    {"name":"CAT-1095","cod":"R_001"},
    {"name":"CAT-1119","cod":"R_003"},
    {"name":"CAT-1115","cod":"R_005"},
    {"name":"CAT-1122","cod":"R_006"},
    {"name":"CAT-1117","cod":"R_007"},
    {"name":"CAT-1100","cod":"R_008"},
    {"name":"CAT-1109","cod":"R_011"},
    {"name":"CAT-1108","cod":"R_012"},
    {"name":"CAT-1199","cod":"R_013"},
    {"name":"CAT-1123","cod":"R_015"},
    {"name":"CAT-1116","cod":"R_016"},
    {"name":"CAT-1102","cod":"R_019"},
    {"name":"CAT-1121","cod":"R_020"},
    {"name":"CAT-1096","cod":"R_023"},
    {"name":"CAT-1104","cod":"R_027"},
    {"name":"CAT-1098","cod":"R_038"},
    {"name":"CAT-1114","cod":"R_039"},
    {"name":"CAT-12633","cod":"R_041"},
    {"name":"CAT-1113","cod":"R_052"},
    {"name":"CAT-1105","cod":"R_053"},
    {"name":"CAT-1098","cod":"R_054"},
    {"name":"CAT-1110","cod":"R_056"},
    {"name":"CAT-1111","cod":"R_057"}

]


chrome.storage.local.get(["ListaCampos"]).then((result) =>{
    stateInc=result.ListaCampos.status.name;
    if(stateInc=="Resuelta" || stateInc=="Cerrada" ){ 
        $("#catcierre").show();
        $("#lcatcierre").show();
        $("#subcatcierre").show();
        $("#lsubcatcierre").show();
    }else{
        $("#catcierre").hide();
        $("#lcatcierre").hide();
        $("#subcatcierre").hide();
        $("#lsubcatcierre").hide(); 
    }
    startticket=result.ListaCampos.created;
    dni=result.ListaCampos.customfield_10337;
    if(!DatoNulo(result.ListaCampos.customfield_14312)){
        tipoBO= result.ListaCampos.customfield_14312;
        console.log(tipoBO);
   
        $("#tipologias").val(tipoBO);
        
        }else{
            $("#tipologias").val('');  
        }
    
    //id vendedor
    if(!DatoNulo(result.ListaCampos.customfield_14313)){
        idvendedor= result.ListaCampos.customfield_14313;
        $("#vendedor").val(idvendedor);
        
        }else{
            $("#vendedor").val('');  
        }
    //Correo
    if(!DatoNulo(result.ListaCampos.customfield_10764)){
        myemail =result.ListaCampos.customfield_10764;
        $("#correo").val(myemail);
    }else{
        $("#correo").val('');
    }

    //Lamada Cliente
    if(!DatoNulo(result.ListaCampos.customfield_15908)){
        callclte =result.ListaCampos.customfield_15908.value;
        if(callclte=="Si"){
           
            $("#btncltesi").css('background-color', '#5AB0E2');
            $("#btncltesi").css('color', 'white');
            $("#btnclteno").css('background-color', '#f0f2f3');
            $("#btnclteno").css('color', 'black');
            callclte="Si";

        }else{

            $("#btnclteno").css('background-color', '#26BD73');
            $("#btnclteno").css('color', 'white');
            $("#btncltesi").css('background-color', '#f0f2f3');
            $("#btncltesi").css('color', 'black');
            callclte="No";

        }
        
    }else{

        $("#btnclteno").css('background-color', '#26BD73');
        $("#btnclteno").css('color', 'white');
        $("#btncltesi").css('background-color', '#f0f2f3');
        $("#btncltesi").css('color', 'black');
        callclte="No";
    }

   


     //Telefono
     if(!DatoNulo(result.ListaCampos.customfield_14105)){
        mytfno =result.ListaCampos.customfield_14105;
        tfcontacto=result.ListaCampos.customfield_14105;
        $("#tfno").val(mytfno);
        $("#tfcontacto").val(tfcontacto);
        chrome.storage.local.get(["datosMysimR"]).then((result) => {
            for(let i = 0; i < result.datosMysimR.length; i++) {
                if(mytfno.includes( result.datosMysimR[i].LINEA)){
                    contrato=result.datosMysimR[i].CONTRATO;
                    i=result.datosMysimR.length;
                }
            }
        
         });

    }else{
        $("#tfno").val('');
        $("#tfcontacto").val('');
    }

    //¡! condicion 1 Inicio: compensacion BO no nulo --> Categoria de Cierre=Cliente tiene razon
    if(!DatoNulo(result.ListaCampos.customfield_10766)){
        $("#catcierre").val('Cliente tiene razón');
        fcreacion=moment(startticket).format('YYYY-MM-DD hh:mm:ss');
        //Condicion 4
        if(fhoy10<fcreacion  && (segmento=="Empresa" || segmento=="Autónomo")){
            $("#recl").val("Ninguno");
        }
        if(fhoy15<fcreacion  && segmento=="Residencial"){
            $("#recl").val("Ninguno");
        }   

    }else{
        $("#catcierre").val('Cliente no tiene razón');
        $("#recl").val("Sin acción");

    }

    
     //Etiquetas
    if(!DatoNulo(result.ListaCampos.labels)){
        etiquetas=result.ListaCampos.labels;
            for (i=0;i<etiquetas.length;i++){
                opciones.push(etiquetas[i]);;
                let etiqtask="#btn"+etiquetas[i];
                $(etiqtask).css('background-color', '#bef8b6');
            }
    }


    //Aplicaciones
    if(!DatoNulo(result.ListaCampos.customfield_14311)){
        appfield=result.ListaCampos.customfield_14311.value;
        if(appfield=="qvantel"){
            apps.push("vista"); 
        }else{
            apps.push(appfield);
        }
        for (i=0;i<apps.length;i++){
            let etiqapp="#btn"+apps[i];
            $(etiqapp).css('background-color', '#bef8b6');
        }
        rellenaComentario();

    }

    // ¡! Condicion 2 Si Error Categoria/Subcategoria = NO --> REF.B.O=Subcategoria
    if(!DatoNulo(result.ListaCampos.customfield_15912)){
        catsubcat =result.ListaCampos.customfield_15912.value;
        if(catsubcat=="Si"){
            catsubcat="Si"; 
        }else{
            if(catsubcat=="No"){
                let subcat =document.getElementById('customfield_10325-val');
                var subcategoria=subcat.children[0].attributes[3].nodeValue;
                catsubcat="No";
                 // ¡! Condicion 2 Si Error Categoria/Subcategoria =NO --> REF.B.O=Subcategoria
                 rboArr.forEach(function(element){
                    if(element.name==subcategoria){
                        $("#tipologias").val(element.cod);
                    }
                })
            }
        }
        
    }
    //Error Categoria/Subcategoria
    document.getElementById("catsubcat").addEventListener("change", (event) => {

        catsubcat=$("#catsubcat").val();
        if(catsubcat=="No"){
            //¡! Condicion 2 Si Error Categoria/Subcategoria =NO --> REF.B.O=Subcategoria
            let subcat =document.getElementById('customfield_10325-val');
            let subcategoria=subcat.children[0].attributes[3].nodeValue;
            rboArr.forEach(function(element){
                if(element.name==subcategoria){
                    $("#tipologias").val(element.cod);
                }


            })
        }

    });


    //Llamada Transferida
    if(!DatoNulo(result.ListaCampos.customfield_15911)){
        transferida =result.ListaCampos.customfield_15911.value;
        if(transferida=="Si"){
           
            $("#btntransfsi").css('background-color', '#5AB0E2');
            $("#btntransfsi").css('color', 'white');
            $("#btntransfno").css('background-color', '#f0f2f3');
            $("#btntransfno").css('color', 'black');
            transferida="Si";

        }else{

            $("#btntransfno").css('background-color', '#26BD73');
            $("#btntransfno").css('color', 'white');
            $("#btntransfsi").css('background-color', '#f0f2f3');
            $("#btntransfsi").css('color', 'black');
            transferida="No";

        }
        
    }else{

        $("#btntransfno").css('background-color', '#26BD73');
        $("#btntransfno").css('color', 'white');
        $("#btntransfsi").css('background-color', '#f0f2f3');
        $("#btntransfsi").css('color', 'black');
        transferida="No";
    }

    //Intentos de contacto

    if(!DatoNulo(result.ListaCampos.customfield_15910)){
        intentos=result.ListaCampos.customfield_15910.value;
        $("#numint").html(intentos);
    }else{
        $("#numint").html("0");
    }

   


}); //Fin Listacampos


    let campoE=document.getElementById("Ecomunicado");
    campoE.disabled= true;
    $("#Ecomunicado").hide();
    $("#lecomunicado").hide();
    let campoS=document.getElementById("Scomunicado");
    campoS.disabled= true;
    $("#Scomunicado").hide();
    $("#lscomunicado").hide();
     //Acciones realizadas
    acciones=document.getElementById('acciones').textContent.trim();
    rellenaComentario();

    //Seleccion de Aplicaciones
    document.querySelectorAll(".app").forEach(el => {
        el.addEventListener("click", e => {
            let etid = "#"+el.id;
            let nombre=el.id.substring(3);
            if($(etid).css('background-color')=="rgb(190, 248, 182)" || $(etid).css('background-color')=="#bef8b6"){  //rgb(240, 242, 243)
                //Color desactivado y borrar a Array
                $(etid).css('background-color', '#f0f2f3');
                let pos=apps.indexOf(nombre);
                delete(apps[pos]);
               
             }else{
                //color activado y añadir a array
                $(etid).css('background-color', '#bef8b6');
                apps.push(nombre);
            }
            apps = apps.filter(x => x!="");
            rellenaComentario();
            
        });
        
    });
    //Selecion de Etiquetas
    document.querySelectorAll(".opc").forEach(el => {
        el.addEventListener("click", e => {
            console.log("Labels")
            console.log(etiquetas);
            let etidp = "#"+el.id;
            let nombrep=el.id.substring(3);
            console.log("Seleccion actual");
            console.log(nombrep);
           if(!etiquetas.includes(nombrep)){
                if($(etidp).css('background-color')=="rgb(190, 248, 182)" || $(etidp).css('background-color')=="#bef8b6"){  //rgb(240, 242, 243)
                    //Color desactivado y borrar a Array
                    $(etidp).css('background-color', '#f0f2f3');
                    let pos=opciones.indexOf(nombrep);
                    delete(opciones[pos]);
                
                }else{
                    //Color desactivado y borrar a Array
                    $(etidp).css('background-color', '#bef8b6');
                    opciones.push(nombrep);
                }
                opciones = opciones.filter(x => x!="");
           }

            console.log("opciones seleccionadas");
            console.log(opciones)
        
        })
    });

    
    //Gestion de Cambios de campos de texto

    document.getElementById("correo").addEventListener("change", (event) => {
        myemail=$("#correo").val();
        
    });

    document.getElementById("tfcontacto").addEventListener("change", (event) => {
        tfcontacto=$("#tfcontacto").val();
        $("#tfno").val(tfcontacto);
    });
    document.getElementById("tfno").addEventListener("change", (event) => {
        mytfno=$("#tfno").val();
    });
    document.getElementById("acciones").addEventListener("change", (event) => {
        acciones=$("#acciones").val();
        rellenaComentario();
    });

    
    //¡!Condicion 3 y 4

    document.getElementById("catcierre").addEventListener("change", (event) => {
        catcierre=$("#catcierre").val();
        //¡!Condicion 3: Si categoria de cierre =Cliente no tiene razon Reclamacion ="Sin accion"
        if(catcierre=="Cliente no tiene razón"){
            $("#recl").val("Sin acción");
        }
        //Condicion 4
        fcreacion=moment(startticket).format('YYYY-MM-DD hh:mm:ss');
        if(catcierre=="Cliente tiene razón"){
            if(fhoy10<fcreacion  && (segmento=="Empresa" || segmento=="Autónomo")){
                $("#recl").val("Ninguno");
            }
            if(fhoy15<fcreacion  && segmento=="Residencial"){
                $("#recl").val("Ninguno");
            }   
        }
        
        
        let htmlsub="";
        switch (catcierre) {
            case 'Cliente tiene razón':
                htmlsub=(`
                <select id="subcatcierre" name="hsubcatcierre">
                <option value="">Elige Opción</option>
                <option value="Condiciones mal informadas">Condiciones mal informadas</option>
                <option value="Error Agente">Error Agente</option>
                <option value="Venta fraudulenta">Venta fraudulenta</option>
                <option value="No existen evidencias">No existen evidencias</option>`);
                $("#divsubcat").html(htmlsub);
            break;
            case 'Cliente no tiene razón':
                htmlsub=(`
                <select id="subcatcierre" name="hsubcatcierre">
                <option value="">Elige Opción</option>
                <option value="Deferencia Comercial">Deferencia Comercial</option>
                <option value="Error Cliente">Error Cliente</option>
                <option value="Importe superior deferencia">Importe superior deferencia</option>
                <option value="Ya compensado">Ya compensado</option>`);
                $("#divsubcat").html(htmlsub);
            break;
            case 'Cliente parcialmente tiene razón':
                htmlsub=(`
                <select id="subcatcierre" name="hsubcatcierre">
                <option value="">Elige Opción</option>
                <option value="Condiciones mal informadas">Condiciones mal informadas</option>
                <option value="Error Agente">Error Agente</option>
                <option value="Incidencia Sistema">Incidencia Sistema</option>`);
                $("#divsubcat").html(htmlsub);
            break;
            case 'No sé si el cliente tiene razón':
                htmlsub=(`
                <select id="subcatcierre" name="hsubcatcierre">
                <option value="">Elige Opción</option>
                <option value="Oferta inexistente">Oferta inexistente</option>`);
                $("#divsubcat").html(htmlsub);
            break;    
        };
    })
/********************************************************************************* */
    document.getElementById("procap").addEventListener("change", (event) => {
        let opcionap=$("#procap").val();
        let htmltipoap="";
        
        switch (opcionap) {
            case 'Sí':
                htmltipoap=(`
                <select id="tipoap" name="tipoap">
                <option value="">Elige Opción</option>
                <option value="Importe elevado">Importe Elevado</option>
                <option value="Solucionar en FO">Solucionar en FO</option>
                <option value="Escalado correcto al BO">Escalado correcto al BO</option>`);
                $("#divtipoap").html(htmltipoap);
            break;
            case 'No':
                htmltipoap=(`
                <select id="tipoap" name="tipoap">
                <option value="">Elige Opción</option>
                <option value="No existe problema">No existe problema</option>
                <option value="Transferir">Transferir</option>`);
                $("#divtipoap").html(htmltipoap);
            break;
        }


    });

/********************************************************************************/


    //Seleccion del plan de accion segun plantillas
    document.getElementById("placcion").addEventListener("change", (event) => {
        switch($("#placcion").val()){
            case "2I_CB":
                $("#acciones").val("Dejamos pendiente de segundo contacto");
            break;
            case "SOLICITUDESCUCHAN":
                $("#acciones").val(`Comprobamos que el cliente tiene contratada la tarifa: XXX , por la que paga un precio mensual de: XX€ con los descuentos aplicados: XX%  y XX%. Sin embargo, el cliente reclama un precio mensual de XX€ /descuento de XX%.
                                    ID DE VENDEDOR:`+ $('#vendedor').val()+`
                                    FECHA:`+$('#fecha').val()+`
                                    MOTIVO:  `);
            break;
            case "SOLICITUDESCUCHAR":
                $("#acciones").val(`Comprobamos que el cliente tiene contratada la tarifa: XXX , por la que paga un precio mensual de: XX€ con los descuentos aplicados: XX%  y XX%. Sin embargo, el cliente reclama un precio mensual de XX€ /descuento de XX%.
                                    Fecha:`+$('#fecha').val()+`
                                    ID Agente: 
                                    Línea: 
                                    DNI: 
                                    Motivo de escalado: `);
            break;
            case "Contacto fuera horario":
                $("#acciones").val("Dejamos pendiente de contacto por estar fuera de horario ");
            break;
            case "OFERTA_INEXISTENTE":
                $("#acciones").val("Promoción no existente, no podemos aplicarla. Llamamos al cliente para pedir disculpas y transferir con el departamento oportuno.");
            break;
            case "DEF_COM_FO":
                $("#acciones").val("Devolución realizada en llamada por DEFERENCIA COMERCIAL, cierro ticket sin envío de comunicación.");
            break;
            case "SECB":
                $("#acciones").val("Escalamos por correo 2º vez a "+$('#vendedor').val()+", para obtener respuestas lo antes posible ");
            break;
            case "EVCB":
                $("#acciones").val("Cliente indica que tiene evidencias para corroborar su versión. (Ademas se manda SMS Masmovil Neg info: por favor envie la documentacion a gestiones.bo@yoigo.com, asunto "+ticket+"+ "+dni+". plazo 24horas Gracias) ");
            break;
            case "ROBOTCB":
                $("#acciones").val("PLANTILLA ROBOT ");
            break;
        }
        acciones=$("#acciones").val();
        
        rellenaComentario();
    });


    
 //Gestion campo envio Correo y boton
    document.getElementById("correocheck").addEventListener("click", (event) => {

        let chkcorreo=document.getElementById("correocheck");
        let chktfno=document.getElementById("tfnocheck");
        let campo=document.getElementById("Ecomunicado");
        if(chkcorreo.checked){
           campo.disabled = false;
           $("#Ecomunicado").show();
           $("#Ecomunicado").val("");
           $("#lecomunicado").show();
           $("#cierres").val(0);
           chktfno.checked=false;
           $("#Scomunicado").hide();
           $("#lscomunicado").hide();
           
        }else{
            $("#Ecomunicado").hide();
            $("#lecomunicado").hide();
            campo.disabled = true;
            
        }
    });
 //Gestion seleccion envio SMS y boton
    document.getElementById("tfnocheck").addEventListener("click", (event) => {
        
        let chktfno=document.getElementById("tfnocheck");
        let chkcorreo=document.getElementById("correocheck");
        let campot=document.getElementById("Scomunicado");
        if(chktfno.checked){
           campot.disabled = false;
           $("#Scomunicado").show();
           $("#Scomunicado").val("");
           $("#lscomunicado").show();
           $("#cierres").val(0);
           chkcorreo.checked=false;
           $("#Ecomunicado").hide();
           $("#lecomunicado").hide();  
        }else{
            $("#Scomunicado").hide();
            $("#lscomunicado").hide();
            campot.disabled = true;   
        }
    });

    
//Seleccion boton Telefono de contacto

    btncltesi.addEventListener('click',e =>{
        $("#btncltesi").css('background-color', '#5AB0E2');
        $("#btncltesi").css('color', 'white');
        $("#btnclteno").css('background-color', '#f0f2f3');
        $("#btnclteno").css('color', 'black');
        callclte="Si";
        rellenaComentario();
        
    });
    btnclteno.addEventListener('click', e => {
        $("#btnclteno").css('background-color', '#26BD73');
        $("#btnclteno").css('color', 'white');
        $("#btncltesi").css('background-color', '#f0f2f3');
        $("#btncltesi").css('color', 'black');
        callclte="No";
        
    })

 
//Seleccion boton Transferida
    btntransfsi.addEventListener('click', e => {
        $("#btntransfsi").css('background-color', '#5AB0E2');
        $("#btntransfsi").css('color', 'white');
        $("#btntransfno").css('background-color', '#f0f2f3');
        $("#btntransfno").css('color', 'black');
        transferida="Si";

        
    });
    btntransfno.addEventListener('click', e => {
        $("#btntransfno").css('background-color', '#26BD73');
        $("#btntransfno").css('color', 'white');
        $("#btntransfsi").css('background-color', '#f0f2f3');
        $("#btntransfsi").css('color', 'black');
        transferida="No";

        
        
    });

//Seleccion boton Intentos
    btnmasint.addEventListener('click', e => {
        intentos++;
        $("#numint").html(intentos);
        callclte="Si"; //el valor tiene que ser exactamente asi para poder actualizarlo
        rellenaComentario()
        
        
        
    })
    btnmenint.addEventListener('click', e => {
        if(intentos>0){
            intentos--;
        }else{
            callclte="No"; 
        }
        if(intentos==0){
            callclte="No";
            
        }
        $("#numint").html(intentos); 
        rellenaComentario()
        
    });


    btnenviar.addEventListener('click', e => {

        console.log("Peticion Token");
        /*gettokenApi().then((token) => { //API en ApiMysim
            let accessToken="Bearer "+token.access_token;
            console.log(accessToken);
            }).catch(error => {
            console.log(error); 
            })
        */


    });

    btnsave.addEventListener('click', e => {
        //console.log("Estado : "+stateInc);
       // getDataATC(user);//obtiene datos con el token y luego actualiza
        if(validDataGestTicket()){
            completed=true;
            $("#infouser").html("");
            if(opciones.length<1){
                $("#infouser").append(`<div id="cargandoBl" class="mensaje">La información no se envia si se selecciona ninguna etiqueta.</div>`);
                completed=false
            }
            if(apps.length<1){
                $("#infouser").append(`<div id="cargandoBl" class="mensaje">La información no se envia si se selecciona ninguna aplicacion.</div>`);
                completed=false;
            }
            if(completed){

                allDataupdate(ticket,stateInc);
                //almacenarComentario($("#prev").val());
            }
       }else{
            $("#infouser").html(`<div id="cargandoBl" class="mensaje">La información no se envia si no se rellena campos obligatorios.</div>`)
       }

    });

//Gestion campos vacios no rellenados

function validDataGestTicket(){
    let resp=true;
    let valfields=["#area","#catsubcat","#catcierre","#subcatcierre","#acciones","#prev"];
    if($("#catcierre").is(":hidden")){
        valfields=["#area","#catsubcat","#acciones","#prev"];
    }
   

  
    valfields.forEach(function(element){
        if(DatoNulo($(element).val())){
            $(element).css('background-color', '#CF6653');
            resp=false;
        }else{
            $(element).css('background-color', '#FFFFFF');
        }

    });

   

    return resp
}



//Rellenado automatico de comentarios
function rellenaComentario(){
    let comentario=(`
    Aplicativos Utilizados: `+apps+`
    Acciones Realizadas: `+ acciones+`
    `)
    $("#prev").val(comentario);

}

//Gestionar comunicaciones CUCO en gestionplantillas.js
//manageComunication(segmento);
    
//Almacenar comentario
async function almacenarComentario(comentario){

    var data = JSON.stringify({
        "body": comentario
      });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
        //console.log(this.responseText);
        }
    });

   xhr.open("POST", "https://tgjira.masmovil.com/rest/api/latest/issue/"+ticket+"/comment");
   xhr.setRequestHeader("Content-Type", "application/json");
   xhr.setRequestHeader("Authorization", "Bearer OTM4NTI1NzY3NzA1OsEFhymZhzPP8LowSnvQYbXoPPLo");
   

   xhr.send(data);


}

//almacenar campos
function allDataupdate(ticket,estado,user){
    console.log("Test Actualizando ticket...");
    let serverid=document.cookie.split(";")[2].split("=")[1];
    let stringval='"'+$("#procap").val()+'":"'+$("#tipoap").val()+'"';
    //construimos el body para que sea aceptado pr la API://Ej:{"proceeds_opening":{"Sí":"Importe elevado"}}
    let newstring = '{"proceeds_opening":{' + stringval + '}}'

      //Json probado OK
      if(intentos!=0){//intntos no puede tener valor 0,Vacio o nulo
        var datosjson =JSON.stringify({
            "key": ticket,
            "project": "ATC",
            "ticketType": "Reclamación",
            "customFields": {
                "internal_code_ref_bo": $("#tipologias").val(),
                "vendor_id": $("#vendedor").val(),
                "area_causing_the_claim": $("#area").val(),
                "try_to_contact":intentos ,
                "customer_call":callclte,
                "called_transferred":transferida,
                "category/subcategory_error":String(catsubcat),
                "non_computable_claim":$("#recl").val(),
                }
            });
        }else{
            var datosjson =JSON.stringify({
                "key": ticket,
                "project": "ATC",
                "ticketType": "Reclamación",
                "customFields": {
                    "internal_code_ref_bo": $("#tipologias").val(),
                    "vendor_id": $("#vendedor").val(),
                    "area_causing_the_claim": $("#area").val(),
                    "customer_call":callclte,
                    "called_transferred":transferida,
                    "category/subcategory_error":String(catsubcat),
                    "non_computable_claim":$("#recl").val(),
                    }
                });
        }
        $("#infouser").html(`<div id="cargandoBl" class="mensaje">Actualizando información...</div>`);
    gettokenApi().then((token) => {
        let accessToken="Bearer "+token.access_token;
        const $cargandoBl = document.getElementById("cargandoBl");
        $cargandoBl.style.display = 'none';
        //Actualizamos Etiquetas  ====>Paso 1***************
        if(opciones.length>0){
                var labelsjson =JSON.stringify({
                    "transitionId":"281",
                    "labels":opciones,
                });
                updateTransitionTicket(ticket,accessToken,labelsjson,user).then((result) => { 
                 
                    console.log("Resultado actualizacion labels");
                    console.log(result);
                    
                    if(result.code){
                        console.log(result.code);
                        if(result.code!="200"){
                            $("#infouser").append(`<div id="cargandoBl" class="mensaje">Error al actualizar etiquetas</div>`);
                        }
                    }
            
                }).catch(error => {
                    console.log("Error update data ticket : "+error);
                })
        } 

        //Actualizamos Categoria y subcategoria de cierre si procede ====>Paso 2***************
         //comprobar estado del ticket para ver si actualizamos cat/subcat de cierre
        //solo en Resuelta y Cerrada actualiza cat/subcat **************
        if(estado=="Resuelta" || estado=="Cerrada" ){ 
            var closejson =JSON.stringify({
                "transitionId":"331",
                "closure_category": $("#catcierre").val(),
                "closure_subcategory": $("#subcatcierre").val(),     
            });
            console.log("Json categoria /subcategoria en estado :"+estado)
            console.log(closejson)
           updateTransitionTicket(ticket,accessToken,closejson,user).then((result) => { 
                if(result.code){
                    if(result.code!="200"){
                        $("#infouser").append(`<div id="cargandoBl" class="mensaje">Error al actualizar campo categoria/subcategoria cierre</div>`);
                    }
                }
       
            }).catch(error => {
                $("#infouser").append(`<div id="cargandoBl" class="mensaje">Error al actualizar categoria/subcategoria de cierre`);
                console.log("Error update data ticket : "+error);
            })
        }else{
            console.log("no se puede actualizar categoria/subcategoria en estado :"+estado)
        }
         //Almacenamos datos ====>Paso 3***************
        if(estado=="Registrada" || estado=="En progreso" || estado=="Resuelta" || estado=="Cerrada" ){ 
            updateDataTicket(ticket,accessToken,sesionid,serverid,datosjson,user).then((result) => {
              
                console.log("Resultado actualizacion campos");
                console.log(result);
                if(result.code){
                    if(result.code!="200"){
                        $("#infouser").append(`<div id="cargandoBl" class="mensaje">Error al actualizar campos</div>`)
                    }
                }

            }).catch(error => {
                $("#infouser").html(`<div id="cargandoBl" class="mensaje">Error al actualizar campos!!.</div>`);
                //console.log("Error update data ticket : "+error);
            })
    
        }
        //procede apertura ====>Paso 4***************
        
        var procJson =newstring
        
        proceedsTicket(ticket,accessToken,procJson,user).then((result) => {
                console.log("Resultado actualizacion procede apertura");
                console.log(result);
                if(result.code){
                    if(result.code!="200"){
                        $("#infouser").append(`<div id="cargandoBl" class="mensaje">Error al actualizar campo procede apertura!! </div>`)
                    }
                }
            }).catch(error => {
                $("#infouser").append(`<div id="cargandoBl" class="mensaje">Campo Procede apertura no se ha actualizado.</div>`);
                //console.log("Error update data ticket : "+error);
            })
    
    }).catch(error => {

        console.log("Error al obtener token"+error);

    })
    $("#infouser").show();
}


}



