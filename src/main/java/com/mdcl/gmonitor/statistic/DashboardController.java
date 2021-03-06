package com.mdcl.gmonitor.statistic;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
class DashboardController {

    //private AccountRepository accountRepository;

    //@Autowired
	public DashboardController() {
	    //this.accountRepository = accountRepository;
    }

    @RequestMapping(value = "dashboard", method = RequestMethod.GET)
    public String dashboard() {
        return "statistic/dashboard";
    }

    @RequestMapping(value = "metric-query", method = RequestMethod.GET)
    public String metricQuery() {
        return "statistic/metricQuery";
    }


}
