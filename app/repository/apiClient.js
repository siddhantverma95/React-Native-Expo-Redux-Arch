import { create } from "apisauce";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.baseUrl,
  timeout: 20000,
});

apiClient.setHeaders({
  Authorization: "token",
});

const apiMonitor = (response) => console.log("API MONITOR: ", response);
apiClient.addMonitor(apiMonitor);

export default apiClient;
