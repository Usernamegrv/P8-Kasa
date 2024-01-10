export async function fetchAboutData() {
  const response = await fetch("/about.json");
  if (!response.ok) {
    throw new Error("Failed to fetch about data");
  }
  return await response.json();
}
