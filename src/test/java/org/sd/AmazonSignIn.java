package org.sd;

import java.util.List;

import java.util.Map;

import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import io.cucumber.datatable.*;

public class AmazonSignIn extends BaseClass{
	
	@Given("to launch the browser")
	public void to_launch_the_browser() {
	    launchBrowser();
	}

	@When("to launch the amazon Url")
	public void to_launch_the_amazon_Url() {
	   launchUrl("https://www.amazon.in/");
	}

	@When("to click the signin option")
	public void to_click_the_signin_option() {
	    WebElement btn = driver.findElement(By.xpath("//a[@id='nav-link-accountList']"));
	    btn.click();
	}

	@When("to pass the valid email or mobile number")
	public void to_pass_the_valid_email_or_mobile_number(io.cucumber.datatable.DataTable d) {
		WebElement signin = driver.findElement(By.xpath("//input[@type='email']"));
		List<Map<String, String>> md = d.asMaps();
		signin.sendKeys(md.get(2).get("email2"));
	}

	

}
