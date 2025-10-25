import { Modal, View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import Div from "./div";
import Titulo from "./titulo";
import Boton from "./boton";

export default function ModalCustom({ children, title, onClose, visible, onSutmit }) {
    return (
        <Modal visible={visible} transparent={true} animationType="slide" onRequestClose={onClose} presentationStyle="overFullScreen">
            <View style={styles.conteiner}>
                <View style={styles.modal}>
                    <Div>
                        <Titulo title={title}></Titulo>
                        <Pressable onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </Pressable>
                    </Div>
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        <View style={styles.row}>
                            {children}

                            <Div>
                                <Boton title={'Registrar Usuario'} onPress={onSutmit}></Boton>
                            </Div>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        width: '92%',
        backgroundColor: '#E0E3E7',
        borderRadius: 10,
        height: '90%',
    },
    closeButton: {
        backgroundColor: '#0041F2',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    closeButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    row: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    }

})