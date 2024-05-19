import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import Cog from "@assets/cog.svg";
import Pencil from "@assets/pencil.svg";
import Wine from "@assets/wine.svg";
import Bookmark from "@assets/bookmark.svg";
import Basket from "@assets/basket.svg";
import ArrowRight from "@assets/arrow-right.svg";

export function ProfileScreen() {
  const menu = [
    {
      id: "1",
      title: "My ratings",
      icon: <Wine className="w-6 h-6 text-main-red" />,
      notifications: 12,
      onpress: () => {},
    },
    {
      id: "2",
      title: "Wishlist",
      icon: <Bookmark className="w-6 h-6 text-main-red" />,
      onpress: () => {},
    },
    {
      id: "3",
      title: "My orders",
      icon: <Basket className="w-6 h-6 text-main-red" />,
      notifications: 8,
      onpress: () => {},
    },
  ];

  type Item = {
    id: string;
    title: string;
    icon: any;
    notifications?: number;
    onPress: () => void;
  };

  type MenuItem = {
    item: Item;
    index: number;
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const renderMenuItem = ({ item, index }: MenuItem) => {
    return (
      <TouchableOpacity
        onPress={item.onPress}
        className={classNames(
          index !== 0 ? "mt-2" : "mt-0",
          "bg-[#FFFDFD] rounded-xl border border-[#E6E6E6] py-4 flex flex-row justify-between px-4"
        )}
      >
        <View className="flex flex-row items-center">
          {item.icon}
          <Text className="text-sm text-main-black font-bold ml-1">
            {item.title}
          </Text>
        </View>
        <View className="flex flex-row items-center">
          {item.notifications && (
            <View className="bg-main-pink rounded-full items-center justify-center px-2 py-1">
              <Text className="text-xs text-main-black font-bold">
                {item.notifications}
              </Text>
            </View>
          )}
          <ArrowRight className="ml-2" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex flex-1">
      <View className="bg-green-200 h-40 w-screen">
        <Image
          className="absolute w-full h-full top-0 bottom-0 left-0 right-0"
          source={require("@assets/header.png")}
        />
        <View className="absolute left-6 top-20">
          <Cog className="w-7 h-7 text-main-red" />
        </View>
        <TouchableOpacity
          onPress={() => {}}
          className="absolute max-auto self-center -bottom-8 border-8 border-white rounded-full"
        >
          <View className="relative bg-[#FFEFEF] w-16 h-16 items-center justify-center border border-[#E6E6E6] rounded-full ">
            <Text className="text-bmd text-main-red font-semibold">AB</Text>
          </View>
          <View className="absolute -right-2 top-8 bg-white p-1 rounded-full border border-[#E6E6E6]">
            <Pencil className="w-4 h-4 text-black" />
          </View>
        </TouchableOpacity>
      </View>

      <View className="items-center mt-12">
        <Text className="text-base text-main-black font-bold">
          Ahmet Bugra Avcilar
        </Text>
        <View className="flex flex-row items-center justify-center mt-4">
          <Text className="text-[#7E7E7E] text-xs font-normal">
            Favorite wine: Red
          </Text>
          <View className="w-2 h-2 rounded-full bg-gray-200 mx-2" />
          <Text className="text-[#7E7E7E] text-xs font-normal">France 🇫🇷</Text>
        </View>
        <View className="flex flex-row items-center justify-center mt-4">
          <View className="flex flex-col items-center">
            <Text className="text-lg text-main-black font-bold">100</Text>
            <Text className="text-[#7A7979] text-sm font-medium">
              followers
            </Text>
          </View>
          <View className="h-10 w-px flex flex-col bg-[#E6E6E6] mx-4" />
          <View className="flex flex-col items-center">
            <Text className="text-lg text-main-black font-bold">12</Text>
            <Text className="text-[#7A7979] text-sm font-medium">
              following
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ flex: 1 }}
        className="mt-4 mx-4"
        scrollEnabled={false}
        data={menu}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
      />
      <Text className="text-[#7E7E7E] text-xs text-center font-normal mb-2">
        v1.02
      </Text>
    </View>
  );
}
