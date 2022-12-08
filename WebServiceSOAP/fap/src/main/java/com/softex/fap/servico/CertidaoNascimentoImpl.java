package com.softex.fap.servico;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import jakarta.jws.WebService;


@WebService(endpointInterface = " com.softex.fap.servico.ICertidaoNascimento")
public class CertidaoNascimentoImpl implements ICertidaoNascimento {
	
	@Override
	public int calcularIdade(String idade) {
		SimpleDateFormat sdf = new SimpleDateFormat ("dd/MM/yyyy");
		int idadeCalculada = 0;
		try {
			Calendar dataNascimento = Calendar.getInstance();
			Date idadeDate = sdf.parse(idade);
			dataNascimento.setTime(idadeDate);
			
			Calendar hoje = Calendar.getInstance();
			idadeCalculada = hoje.get(Calendar.YEAR) - dataNascimento.get(Calendar.YEAR);
			
			// SE AINDA NÃO CHEGOU NO ANIVERSÁRIO!!!
			
			if (hoje.get(Calendar.MONTH) < dataNascimento.get(Calendar.MONTH)) {
				idadeCalculada--;
			} else {
				if (hoje.get(Calendar.MONTH) == dataNascimento.get(Calendar.MONTH) && hoje.get(Calendar.DAY_OF_MONTH) < dataNascimento.get(Calendar.DAY_OF_MONTH)){
				idadeCalculada --;	
				}
			}
			
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return idadeCalculada;
		
	}

}
