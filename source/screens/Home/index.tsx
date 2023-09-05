import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import Rocket from '../../assets/images/rocket.png'
import To from '../../assets/images/to.png'
import Do from '../../assets/images/do.png'
import { PlusCircle, Circle, Trash2, Check } from 'lucide-react-native';

const index = () => {
    return (
        <View className="flex-1 bg-gray-60">
            <View className="flex-shrink-0 bg-gray-70 h-44">
                <View className="flex flex-row justify-center items-center mt-20 space-x-3">
                    <Image source={Rocket} />
                    <View className="flex flex-row justify-center items-center">
                        <Image source={To} />
                        <Image source={Do} />
                    </View>
                </View>
                <View className="flex flex-row justify-between items-center absolute w-full h-14 mt-36 px-4">
                    <TextInput
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor="#808080"
                        className="flex items-center p-4 w-[280px] h-14 rounded-md bg-gray-50 border-2 border-gray-70 text-gray-10 focus:border-2 focus:border-purple-dark" />
                    <TouchableOpacity activeOpacity={.8} className="flex justify-center items-center w-14 h-14 bg-blue-500 rounded-md">
                        <PlusCircle size={25} strokeWidth={2} color='#F2F2F2' />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex flex-row justify-between items-center w-full h-10 mt-10 px-5">
                <View className="flex flex-row justify-center items-center space-x-2">
                    <Text className="text-blue-normal font-bold text-lg">Criadas</Text>
                    <View className="flex justify-center items-center px-2 py-0.5 bg-gray-40 rounded-full">
                        <Text className="text-gray-20 text-md font-bold">0</Text>
                    </View>
                </View>
                <View className="flex flex-row justify-center items-center space-x-2">
                    <Text className="text-purple-normal font-bold text-lg">Concluídas</Text>
                    <View className="flex justify-center items-center px-2 py-0.5 bg-gray-40 rounded-full">
                        <Text className="text-gray-20 text-md font-bold">0</Text>
                    </View>
                </View>
            </View>
            {/* Without data */}
            {/* <View className="flex justify-center items-center py-12 space-y-4 mt-5 border-t-2 border-gray-50 mx-5">
                <View>
                    <Clipboard size={60} strokeWidth={1.5} color='#262626' />
                </View>
                <View>
                    <Text className="text-gray-30 text-center font-bold">Você ainda nào tem taredas cadastradas</Text>
                    <Text className="text-gray-30 text-center font-normal">Crie tarefas e organize sues itens a fazer</Text>
                </View>
            </View> */}
            <View className="flex justify-center items-center space-y-4 mt-5 mx-5">
                <TouchableOpacity activeOpacity={.8} className="w-full h-16 flex flex-row justify-center items-center bg-gray-50 border-2 border-gray-40 rounded-lg px-10 space-x-4">
                    <Circle size={25} strokeWidth={2} color='#4EA8DE' />
                    <Text numberOfLines={2} className="w-auto text-sm font-normal text-gray-10">Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
                    <TouchableOpacity activeOpacity={.8}>
                        <Trash2 size={25} strokeWidth={2} color='#808080' />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View className="w-full h-16 flex flex-row justify-center items-center bg-gray-50 border-2 border-gray-40 rounded-lg px-10 space-x-4">
                    <View className="flex justify-center items-center w-6 h-6 rounded-full bg-purple-dark">
                        <Check size={15} strokeWidth={2} color='#F2F2F2' />
                    </View>
                    <Text numberOfLines={2} className="w-auto text-sm font-normal text-gray-30 line-through">Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
                    <Trash2 size={25} strokeWidth={2} color='#808080' />
                </View>
            </View>
        </View>
    )
}

export default index