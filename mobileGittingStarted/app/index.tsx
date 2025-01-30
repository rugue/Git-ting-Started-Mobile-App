import { Button, Linking, StyleSheet, Text, View } from "react-native";

const GITHUB_REPO_URL = "https://github.com/rugue/Git-ting-Started-Mobile-App";
const HNG_HIRE_URL = "https://hng.tech";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Git-ting Started 🚀</Text>

      <Button
        title="View GitHub Repo"
        onPress={() => Linking.openURL(GITHUB_REPO_URL)}
      />
      <View style={{ marginVertical: 10 }} />
      <Button
        title="Hire a Developer from HNG"
        onPress={() => Linking.openURL(HNG_HIRE_URL)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
