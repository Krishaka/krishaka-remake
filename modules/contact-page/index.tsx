import { useState } from "react";
import CompWrapper from "@/components/comp-wrapper";
import Link from "next/link";
import {
  commonHeaderCss,
  commonPageContainerCss,
  commonPageWrapperCss,
} from "@/styles/common-styles";
import {
  contactPageWrapperCss,
  formWrapperCss,
  joinButtonCss,
} from "@/modules/contact-page/styles";
import { formLinkForJob } from "@/common-data";

export default function ContactPageModule() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    let valid = true;
    let newErrors = { name: "", email: "", phone: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          alert(result.message);
          setFormData({ name: "", email: "", phone: "", query: "" });
        } else {
          console.error("Error:", result.message);
          alert("Failed to submit the form.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <CompWrapper
      tag="div"
      page="Contact Us"
      wrapperClassName="page"
      wrapperStyles={commonPageWrapperCss}
      innerElemExtraStyles={commonPageContainerCss}
    >
      <h1 css={commonHeaderCss()}>Contact Us</h1>
      <div>
        <Link href={formLinkForJob} passHref={true}>
          <button css={joinButtonCss}>Join Us</button>
        </Link>
      </div>
      <hr />
      <div css={contactPageWrapperCss}>
        <form onSubmit={handleSubmit} css={formWrapperCss}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p>{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="query">Query:</label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </CompWrapper>
  );
}
