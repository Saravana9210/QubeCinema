package com.qube.core;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

public class HelperUtils {
	private static Properties prop = new Properties();
	
	public static String readProperty(String uri) {
		try {
			String[] array = uri.split("->", 2);
			String fileName = array[0];
			String propertyName = array[1];
			InputStream input = new FileInputStream("src/test/resources/data/" + fileName);
			prop.load(input);
			return prop.getProperty(propertyName);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}		
	}
}
