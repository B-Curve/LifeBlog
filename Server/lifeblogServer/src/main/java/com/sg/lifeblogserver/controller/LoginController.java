/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author asmat
 */
@Controller
@CrossOrigin
public class LoginController {

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public void showLoginForm() {
        //return "login";
    }
}
