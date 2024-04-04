import { api } from "src/utils/api";
import { toast } from "react-toastify";

// GET
export async function GetMainServiceTab() {
  try {
    const res = await api.get("mainServiseCategory/all");
    return res.status === 200 && res.data;
  } catch (e) {
    console.error(e, "err");
  }
}

// DELETE
export async function DeleteMainServiceTab(id) {
  try {
    const res = await api.delete(`mainServiseCategory/delete/${id}`);
    res.status === 204 &&
      toast.success("Deleted", { position: "bottom-right" }),
      setTimeout(() => {
        window.location.reload();
      }, 1500);
  } catch (e) {
    console.error(e, "err");
  }
}

// SAVE
export async function SaveMainServiceTab(values) {
  try {
    const body = {
      title: values.title,
      title_ru: values.title_ru,
      title_en: values.title_en,
    };
    const res = await api.post("mainServiseCategory/create", body);
    res.status === 201 &&
      toast.success("Created", { position: "bottom-right" }),
      setTimeout(() => {
        window.location.reload();
      }, 1500);
  } catch (e) {
    console.error(e, "err");
  }
}

// UPDATE
export async function UpdateMainServiceTab(values) {
  try {
    const id = JSON.parse(sessionStorage.getItem("catId"));
    const body = {
      title: values.title,
      title_ru: values.title_ru,
      title_en: values.title_en,
    };
    const res = await api.patch(`mainServiseCategory/update/${id}`, body);
    res.status === 204 &&
      toast.success("Updated", { position: "bottom-right" }),
      setTimeout(() => {
        window.location.reload();
      }, 1500);
  } catch (e) {
    console.error(e, "err");
  }
}
