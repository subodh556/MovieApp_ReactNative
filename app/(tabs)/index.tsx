import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link, useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {

  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" />
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}>
        <Image source={icons.logo} className="w-14 h-14 mx-auto mt-20 mb-5" />
        <View className="flex-1">
          <SearchBar 
            onPress={() => {
              router.push("/search");
            }}
            placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
}
