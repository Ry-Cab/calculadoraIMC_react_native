import React from "react";
import { View, Share, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import stylesExt from "./style";

export default function Resultado(resultado){

    const onShare = async () => {
        const result = await Share.share({
        message:
        "Meu IMC é: " + resultado.valorResultado,
        });
    }

    return(
        <View style={stylesExt.container}>
            <View>
            <Text style={styles.text}>{resultado.mensagemResultado} {resultado.valorResultado}</Text>

            </View>

            <View>
                {
                    resultado.valorResultado != null ?
                    
                    <TouchableOpacity
                    style={styles.botaoShared}
                    onPress={onShare}
                    >
                        <Text>Compartilhar</Text>
                    </TouchableOpacity>
                    :
                    <View />
                }
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'black',
        padding: 10
    },
    botaoShared: {
        fontSize: 30,
        backgroundColor: 'cyan',
        width: 100,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        margin: 10,
        padding: 3
    },
    exibeIMC: {
        width: "100%",
        height: "50%"
    }
})