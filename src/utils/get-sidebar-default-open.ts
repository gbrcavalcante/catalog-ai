export function getSidebarDefaultOpen() {
  const match = document.cookie.match(/sidebar_state=([^;]+)/);
  return match ? match[1] === "true" : true;
}
