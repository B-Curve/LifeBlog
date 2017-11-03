package com.sg.lifeblogserver.util;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DatabaseInitializer {

    public static void setKnownGoodState() {

        String url = "jdbc:mysql://localhost:3306/lifeblog_test";

        Properties props = new Properties();
        props.put("user", "root");
        props.put("password", "root");
        props.put("serverTimezone", "UTC");

        List<String> statements = getStatements();

        try (Connection conn = DriverManager.getConnection(url, props)) {

            Statement command = conn.createStatement();
            for (String sql : statements) {
                if (sql.trim().length() > 0) {
                    command.execute(sql);
                }
            }

        } catch (SQLException ex) {
            throw new RuntimeException("It broke", ex);
        }
    }

    private static List<String> getStatements() {

       // URL scriptUrl = //ClassLoader.getSystemResource("SuperHeroSightings_test.sql");
        String file = "lifeblog_test_data.sql";
        List<String> statements = null;
        try {
            //String path = scriptUrl.getPath();
            ClassLoader classloader = Thread.currentThread().getContextClassLoader();
            String platformIndependentPath = Paths.get(classloader.getResource(file).toURI()).toString();
            statements = Files.readAllLines(Paths.get(platformIndependentPath));
        } catch (IOException ex) {
            throw new RuntimeException("Exception reading sql file", ex);
        } catch (URISyntaxException ex) {
            Logger.getLogger(DatabaseInitializer.class.getName()).log(Level.SEVERE, null, ex);
        }

        return statements;
    }
}
