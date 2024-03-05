package org.sd;

import java.util.List;

import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import io.cucumber.datatable.*;

public class Myntra extends BaseClass{

	
	@Given("to launch Gilber")
	public void to_launch_Gilber() {
	    launchBrowser();
	}



	@When("to launch the Url")
	public void to_launch_the_Url() {
	    launchUrl("https://www.myntra.com/");
	}

	@When("to pass the product in search bar")
	public void to_pass_the_product_in_search_bar(DataTable d) {
	    WebElement search = driver.findElement(By.xpath("//input[@placeholder='Search for products, brands and more']"));
	    List<List<String>> l = d.asLists();
	    search.sendKeys(l.get(0).get(0));
	}


}
