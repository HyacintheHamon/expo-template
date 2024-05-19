import { View, Text, Image, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NotificationScreen, ProfileScreen } from "@screens";
import { AntDesign } from "@expo/vector-icons";
import Wine from "@assets/wine.svg";
import Users from "@assets/users.svg";
import Bell from "@assets/bell.svg";

function HomeScreen() {
  return (
    <View className="flex flex-1 items-center pt-16">
      <Image
        className="w-full h-28"
        source={require("@assets/banner.png")}
        resizeMode="contain"
      />
    </View>
  );
}

function SocialScreen() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text>Social</Text>
    </View>
  );
}

function TastingScreen() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text>Tasting</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function TabScreen() {
  const screenOptions = {
    gestureEnabled: false,
    headerShown: false,
  };

  function CustomTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: "row" }}>
        {state.routes.map((route, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            navigation.navigate(route.name);
          };

          function classNames(...classes: string[]) {
            return classes.filter(Boolean).join(" ");
          }

          return (
            <Pressable
              onPress={onPress}
              className="flex flex-1 items-center h-24 justify-center bg-white"
              key={route.name}
            >
              {route.name === "Home" ? (
                <View
                  className={classNames(
                    isFocused ? "bg-main-red/20" : "bg-transparent",
                    "items-center justify-center rounded-2xl px-2 py-1"
                  )}
                >
                  <Wine
                    className={classNames(
                      isFocused ? "text-main-red" : "text-main-gray",
                      "w-8 h-8"
                    )}
                  />
                </View>
              ) : route.name === "Social" ? (
                <View
                  className={classNames(
                    isFocused ? "bg-main-red/20" : "bg-transparent",
                    "items-center justify-center rounded-2xl px-2 py-1"
                  )}
                >
                  <Users
                    className={classNames(
                      isFocused ? "text-main-red" : "text-main-gray",
                      "w-8 h-8"
                    )}
                  />
                </View>
              ) : route.name === "Tasting" ? (
                <View className="bg-main-red p-2 rounded-full w-12 h-12 items-center justify-center">
                  <AntDesign name="plus" color={"#fff"} size={30} />
                </View>
              ) : route.name === "Notifications" ? (
                <View
                  className={classNames(
                    isFocused ? "bg-main-red/20" : "bg-transparent",
                    "items-center justify-center rounded-2xl px-2 py-1"
                  )}
                >
                  <Bell
                    className={classNames(
                      isFocused ? "text-main-red" : "text-main-gray",
                      "w-8 h-8"
                    )}
                  />
                </View>
              ) : (
                route.name === "Profile" && (
                  <View
                    className={classNames(
                      isFocused
                        ? "border-main-red bg-main-red/20"
                        : "border-main-gray bg-main-gray/20 ",
                      "w-10 h-10 rounded-full items-center justify-center border-4"
                    )}
                  >
                    <Text
                      className={classNames(
                        isFocused ? "text-main-red" : "text-main-gray",
                        "text-base font-bold uppercase"
                      )}
                    >
                      AB
                    </Text>
                  </View>
                )
              )}
            </Pressable>
          );
        })}
      </View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Social" component={SocialScreen} />
      <Tab.Screen name="Tasting" component={TastingScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
