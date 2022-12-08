package com.softex.fap;

import com.softex.fap.servico.CertidaoNascimentoImpl;

import jakarta.xml.ws.Endpoint;

public class App 
{
    public static void main( String[] args ){
    	CertidaoNascimentoImpl certidaoNascimento = new CertidaoNascimentoImpl();
    	Endpoint.publish("http://localhost:8085/servico/certidao", certidaoNascimento);
    	System.out.println("Serviço Publicado com Sucesso");
    		
    }
}
