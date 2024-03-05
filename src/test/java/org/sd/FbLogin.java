package org.sd;

import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FbLogin extends BaseClass{
	@Given("to launch the browser")
	public void to_launch_the_browser() {
		launchBrowser();
	}

	@When("to launch the facebook Url")
	public void to_launch_the_facebook_Url() {
		launchUrl("https://en-gb.facebook.com/");
	}

	@When("to validate the username in email field")
	public void to_validate_the_username_in_email_field() {
		WebElement email = driver.findElement(By.xpath("//input[@id='email']"));
		email.sendKeys("halamithihabibo@gmail.com");
	}

	@When("to validate the password in password field")
	public void to_validate_the_password_in_password_field() {
		WebElement password = driver.findElement(By.xpath("//input[@id='pass']"));
		password.sendKeys("sjwdfkjusk");
	}

	@When("to click the Login button")
	public void to_click_the_Login_button() {
		WebElement login = driver.findElement(By.xpath("//button[@name='login']"));
		login.click();
	}

	@Then("to close the browser")
	public void to_close_the_browser() {

	}
	
	
}
