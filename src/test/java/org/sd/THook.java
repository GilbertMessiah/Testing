package org.sd;

import org.base.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class THook extends BaseClass{
	

	//precondion2
	@Before(order = 1)
	private void precondition2() {
		// TODO Auto-generated method stub
		launchBrowser();
	}
	
	//precondtion3
	@Before(order = 10)
	private void precondition3() {
		// TODO Auto-generated method stub
		System.out.println("Successfully completed @Before Annotation");
	}
	
	//postcondition1
	@After(order = 50)
	private void postcondition1() {
		// TODO Auto-generated method stub
		closeEntireBrowser();
	}
	
	//postcondition2
	@After(order =49)
	private void postcondition2() {
		// TODO Auto-generated method stub
		System.out.println("The Entire Browser is Closed");
	}
}
