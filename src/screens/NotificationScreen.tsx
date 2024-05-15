import { Fragment } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import Star from "@assets/star.svg";
import Bell from "@assets/bell.svg";
import NotificationIcon from "@assets/notification_icon.svg";

export function NotificationScreen() {
  const advantages = [
    "New wine deals",
    "Limited offers",
    "Ranking from other users",
    "Order status",
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const notificationsData = [
    {
      id: "1",
      title: "Notification title",
      subtitle: "Notification content is placing here.",
      time: "12:22",
      read: false,
    },
    {
      id: "2",
      title: "Notification title",
      subtitle: "Notification content is placing here.",
      time: "12:22",
      read: false,
    },
    {
      id: "3",
      title: "Notification title",
      subtitle: "Notification content is placing here.",
      time: "12:22",
      read: true,
    },
    {
      id: "4",
      title: "Notification title",
      subtitle: "Notification content is placing here.",
      time: "12:22",
      read: true,
    },
    {
      id: "5",
      title: "Notification title",
      subtitle: "Notification content is placing here.",
      time: "12:22",
      read: true,
    },
  ];

  const NotificationsEmptyList = () => (
    <View className="flex flex-1 justify-center items-center">
      <Bell className="w-8 h-8 text-main-red" />
      <Text className="text-base text-main-black font-bold text-center mt-2">
        No notifications yet
      </Text>
      <Text className="text-sm text-main-gray text-center mt-2 px-10">
        You’ll receive notifications about our new offers, from friends, and
        your order status.
      </Text>
    </View>
  );

  type Notification = {
    id: string;
    title: string;
    subtitle: string;
    time: string;
    read: boolean;
  };

  type NotificationItem = {
    item: Notification;
    index: Number;
  };

  const renderNotificationCard = ({ item, index }: NotificationItem) => {
    return (
      <View
        className={classNames(
          index !== 0 ? "mt-3" : "mt-0",
          "bg-white flex flex-row  justify-between px-3 py-4 rounded-xl border border-[#E6E6E6] shadow-inner"
        )}
      >
        <View className="flex flex-row items-center">
          <View className="w-8 h-8 bg-[#FFEFEF] items-center justify-center rounded-full border border-[#E7E7E7]">
            <Star
              className={classNames(
                !item.read ? "text-main-red" : "text-main-gray",
                "w-4 h-4"
              )}
            />
          </View>
          <View className="flex flex-col ml-2">
            <Text className="text-main-black text-sm font-semibold">
              {item.title}
            </Text>
            <Text className="text-[#7E7E7E] text-xs font-normal">
              {item.subtitle}
            </Text>
          </View>
        </View>
        <Text className="text-main-gray text-xs font-normal">{item.time}</Text>
      </View>
    );
  };

  function renderContent(contentType: string) {
    switch (contentType) {
      case "initial":
        return (
          <Fragment>
            <FlatList
              contentContainerStyle={{ flex: 1 }}
              className="mt-4"
              data={notificationsData}
              renderItem={renderNotificationCard}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={NotificationsEmptyList}
            />
          </Fragment>
        );
      case "no-permission":
        return (
          <Fragment>
            <View className="bg-main-dark-gray/22 p-4 w-full rounded-2xl flex flex-row items-center mt-8">
              <NotificationIcon className="w-12 h-12" />
              <View className="flex flex-col ml-3">
                <Text className="text-main-black text-sm font-semibold">
                  Your order is on the way!
                </Text>
                <Text className="text-main-black text-xs font-normal">
                  Check the details
                </Text>
              </View>
            </View>
            <View className="relative">
              <View className="bg-main-dark-gray/22 p-4 w-full rounded-2xl flex flex-row items-center mt-4 z-10">
                <NotificationIcon className="w-12 h-12" />
                <View className="flex flex-col ml-3">
                  <Text className="text-main-black text-sm font-semibold">
                    Your order is on the way!
                  </Text>
                  <Text className="text-main-black text-xs font-normal">
                    Check the details
                  </Text>
                </View>
              </View>
              <View className="bg-[#252525]/13 mx-4 absolute left-0 right-0 -bottom-4 h-4 self-center rounded-b-xl z-0" />
            </View>
            <View className="flex flex-1 items-center justify-center">
              <Star className="w-4 h-4 text-main-red" />
              <View className="my-4">
                {advantages.map((item: string, index: number) => {
                  return (
                    <View
                      key={item}
                      className={classNames(
                        index !== 0 ? "mt-4" : "mt-0",
                        "bg-main-light-pink items-center justify-center rounded-xl py-1.5 px-3 self-center"
                      )}
                    >
                      <Text className="text-sm text-main-red font-bold">
                        {item}
                      </Text>
                    </View>
                  );
                })}
              </View>
              <Star className="w-4 h-4 text-main-red" />
            </View>
            <TouchableOpacity
              onPress={() => {}}
              className="rounded-xl bg-main-red w-full items-center justify-center h-14 mb-6"
            >
              <Text className="text-base text-white font-bold">
                Turn on notifications
              </Text>
            </TouchableOpacity>
          </Fragment>
        );
    }
  }

  return (
    <SafeAreaView className="flex flex-1 mx-6">
      <Text className="text-xl text-main-black font-bold">Notifications</Text>
      {renderContent("no-permission")}
    </SafeAreaView>
  );
}
