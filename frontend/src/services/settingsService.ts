import { httpClient } from "./httpClient";
import { SettingsDTO, SettingsUpdateData } from "shared-lib";

class SettingsService {
  async getAllSettings(): Promise<SettingsDTO[]> {
    return await httpClient.get<SettingsDTO[]>("api/settings");
  }

  async createSetting(setting: SettingsUpdateData): Promise<SettingsDTO> {
    return await httpClient.post<SettingsDTO>("api/settings", setting);
  }

  async updateSetting(id: string, setting: SettingsUpdateData): Promise<SettingsDTO> {
    return await httpClient.put<SettingsDTO>(`api/settings/${id}`, setting);
  }

  async deleteSetting(id: string): Promise<void> {
    await httpClient.delete(`api/settings/${id}`);
  }
}

export const settingsService = new SettingsService(); 