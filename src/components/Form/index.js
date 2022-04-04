import React from "react";
import { Keyboard,
    FlatList,
    Pressable, 
    StyleSheet, 
    View, 
    Text, 
    Vibration, 
    TextInput, 
    TouchableOpacity} from "react-native";
import Resultado from "./ResultadoIMC";
import { useState } from "react";


export default function Form(){
    const[altura, setAltura] = useState(null);
    const[peso, setPeso] = useState(null);
    const[msg, setMsg] = useState("Preencha os campos altura e peso");
    const[imc, setImc] = useState(null);
    const[textButton, setTextButton] = useState("Calcular");
    const[msgErro, setMsgErro] = useState(null);
    const[IMCList, setIMCList] = useState([])

    function ValidaIMCValues(){
        if(altura !== null && peso !== null){
            setAltura(null);
            setTextButton("Novo Calculo");
            setPeso(null);
            setMsg("IMC: ");
            setMsgErro("")

        }else{
            if(imc ==null){
                setMsgErro("**Campo obrigatório**")
                Vibration.vibrate(500)
            }
            setImc(null);
            setTextButton("Calcular");
            setMsg("Por favor, Preencha os campos altura e peso")
        }
    }

    function CalcularIMC(){
        ValidaIMCValues();
        if(altura !== null && peso !== null){
        let alturaFormat = altura.replace(",",".")
        let pesoFormat = peso.replace(",",".") 
        let totalImc =  (pesoFormat/(alturaFormat*alturaFormat)).toFixed(2);
        setIMCList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
        setImc(totalImc)
        }
        return imc
    }

    return(
        <>
                {imc == null?
                <View style={styles.container}>
                <Pressable onPress={Keyboard.dismiss}>
                        <Text style={styles.label}>Entre com a sua altura:</Text>
                        <Text style={styles.erroMessage}>{msgErro}</Text>
                        <TextInput style={styles.textInput} placeholder="Digite aqui (Exemplo: 1.72)"
                        keyboardType="numeric" onChangeText={setAltura} value={altura}></TextInput>
                        <Text style={styles.label}>Entre com o seu peso:</Text>
                        <Text style={styles.erroMessage}>{msgErro}</Text>
                        <TextInput style={styles.textInput} placeholder="Digite aqui (Exemplo: 80.5)"
                        keyboardType="numeric" onChangeText={setPeso} value={peso}></TextInput>
                        <TouchableOpacity style={styles.buttonCalc} title={textButton} onPress={() => CalcularIMC()}>
                            <Text style={styles.textButtonCalc}>Calcular</Text>
                        </TouchableOpacity>
                </Pressable>
                </View>:
            <View style={styles.container_2}>
                        <Resultado mensagemResultado={msg}></Resultado>
                        <Resultado valorResultado={imc}></Resultado>
                        <TouchableOpacity style={styles.buttonCalc} title={textButton} onPress={() => CalcularIMC()}>
                            <Text style={styles.textButtonCalc}>Calcular</Text>
                        </TouchableOpacity>
            </View>}
            <View style={styles.listaImc}>
                <Text style={styles.text}>Histórico</Text>
                <FlatList 
                data={IMCList.reverse()}
                renderItem={({item}) => {
                    return(
                        <Text style={styles.textList}>IMC: {item.imc}</Text>
                    );
                }}
                keyExtractor={(item) => item.id}
                >

                </FlatList>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 15,
        backgroundColor: "cyan",
        borderRadius: 5,
        padding: 5
    },
    textList:{
        fontSize: 16,
        margin: 5
    },
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    container_2: {
        backgroundColor: 'white',
        marginTop: 10,
        padding: 20,
        borderRadius: 10
    },
    listaImc:{
        backgroundColor: 'white',
        marginTop: 10,
        padding: 20,
        borderRadius: 10
    },
    textButtonCalc:{
        fontSize: 20
    },
    buttonCalc:{
        width: "90%",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "cyan",
        padding: 10,
        margin: 10
    },
    textInput:{
        backgroundColor:'#F2F1ED',
        padding: 10,
        borderRadius: 5
    },
    erroMessage:{
        color:"red",
        fontSize:10,
        fontWeight: "bold"
    },
    label: {
        fontSize: 20,
        marginTop: 5
    }
})