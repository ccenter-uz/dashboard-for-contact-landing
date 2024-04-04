import { api } from "src/utils/api";
import { toast } from "react-toastify";
// GET
export async function GetMainServiceContent(id) {
  try {
    const res = await api.get(`mainServiseCategory/one/${id}`);
    return res.status === 200 && res.data;
  } catch (err) {
    console.log(err, "err");
  }
}

// DELETE
export async function DeleteMainServiceContent(id) {
  try {
    const res = await api.delete(`mainServise/delete/${id}`);
    return (
      res.status === 204 &&
      (toast.success("Successfully deleted", { position: "bottom-right" }),
      setTimeout(() => {
        window.location.reload();
      }, 1500))
    );
  } catch (e) {
    console.error(e, "err");
  }
}

// SAVE
export async function SaveMainServiceContent(values, content, formData) {
  try {
    let contentPart = content;
    if (values.type === "banner") {
      contentPart = {
        ...content,
        title: values.title,
        title_ru: values.title_ru,
        title_en: values.title_en,
        phone: values.phone,
        paragraph_uz: values.paragraph_uz,
        paragraph_ru: values.paragraph_ru,
        paragraph_en: values.paragraph_en,
      };
    } else {
      contentPart = {
        title: values.title,
        title_ru: values.title_ru,
        title_en: values.title_en,
        paragraph_uz: values.paragraph_uz,
        paragraph_ru: values.paragraph_ru,
        paragraph_en: values.paragraph_en,
        span_ru: values.span_ru,
        span_uz: values.span_uz,
        span_en: values.span_en,
        content_text_ru: values.content_text_ru,
        content_text_uz: values.content_text_uz,
        content_text_en: values.content_text_en,
      };
    }
    formData.append("type", values.type),
      formData.append(
        "categoryServise",
        JSON.parse(sessionStorage.getItem("catId"))
      );
    formData.append("text", JSON.stringify(contentPart));

    const res = await api.post("mainServise/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    res.status === 201 &&
      (toast.success("Создано", { position: "bottom-right" }),
      setTimeout(() => {
        window.location.reload();
      }, 1500));
  } catch (e) {
    console.error(e, "err");
  }
}

// UPDATE
export async function UpdateMainServiceContent(values, content, formData) {
  try {
    const id = JSON.parse(sessionStorage.getItem("cardId"));
    let contentPart = content;
    if (values.type === "banner") {
      contentPart = {
        ...content,
        title: values.title,
        title_ru: values.title_ru,
        title_en: values.title_en,
        phone: values.phone,
        paragraph_uz: values.paragraph_uz,
        paragraph_ru: values.paragraph_ru,
        paragraph_en: values.paragraph_en,
      };
    } else {
      contentPart = {
        title: values.title,
        title_ru: values.title_ru,
        title_en: values.title_en,
        paragraph_uz: values.paragraph_uz,
        paragraph_ru: values.paragraph_ru,
        paragraph_en: values.paragraph_en,
        span_ru: values.span_ru,
        span_uz: values.span_uz,
        span_en: values.span_en,
        content_text_ru: values.content_text_ru,
        content_text_uz: values.content_text_uz,
        content_text_en: values.content_text_en,
      };
    }
    formData.append("type", values.type),
      formData.append(
        "categoryServise",
        JSON.parse(sessionStorage.getItem("catId"))
      );
    formData.append("text", JSON.stringify(contentPart));

    const res = await api.patch(`mainServise/update/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    res.status === 204 &&
      (toast.success("Изменено", { position: "bottom-right" }),
      setTimeout(() => {
        window.location.reload();
      }, 1500));
  } catch (e) {
    console.error(e, "err");
  }
}
