import React from "react";
import emailjs from "@emailjs/browser";
import * as S from "../Styles/contact";

export default function Contact() {
  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "template_rtf1xwk",
        e.target,
        "ywIOWQ2EsTjDi5zU9"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert(error.message);
        }
      );

    e.target.reset();
  }

  return (
    <S.Contact>
      <S.Email>
        <S.Form onSubmit={enviarEmail} value="">
          <S.Name>
            <label>Nome</label>
            <input type="text" placeholder="Nome" name="name" />
          </S.Name>
          <S.Address>
            <label>Email</label>
            <input type="email" placeholder="Seu email" name="email" />
          </S.Address>

          <S.Messenger>
            <label>Mensagem</label>
            <textarea
              cols="30"
              rows="8"
              required
              placeholder="Sua mensagem"
              name="message"
            ></textarea>
          </S.Messenger>
          <S.Botton>
            <S.Btn type="submit" value="Enviar mensagem"></S.Btn>
          </S.Botton>
        </S.Form>
      </S.Email>
    </S.Contact>
  );
}
