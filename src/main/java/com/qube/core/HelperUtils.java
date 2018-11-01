package com.qube.core;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Properties;

import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;

public class HelperUtils {
	private static Properties prop = new Properties();
	private static InputStream input = null;
	private static OutputStream output = null;
	
	public static String readProperty(String uri) {
		try {
			String[] array = uri.split("->", 2);
			String fileName = array[0];
			String propertyName = array[1];
			input = new FileInputStream("src/test/resources/data/" + fileName);
			prop.load(input);
			return prop.getProperty(propertyName);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}		
	}
	
	public static void writeProperty(String uri, String value) {
		try {
			String[] array = uri.split("->", 2);
			String fileName = array[0];
			String propertyName = array[1];
			PropertiesConfiguration config = new PropertiesConfiguration("src/test/resources/data/" + fileName);
			config.setProperty(propertyName, value);
			config.save();
//			output = new FileOutputStream("src/test/resources/data/" + fileName);
//			prop.setProperty(propertyName, value);
//			prop.store(output, null);
		} catch (ConfigurationException e) {
			e.printStackTrace();
		} finally {
			if (output != null) {
				try {
					output.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}

		}
	}
}
