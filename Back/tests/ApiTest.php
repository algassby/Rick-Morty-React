<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApiTest extends WebTestCase
{
   public $id;
    
    public function testApiMessage(): void
    {
        $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('GET', '/api/');
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['message' => "Hello world"], $responseData);
    }

   public function testApiCreateProduct(): void
    {
         $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('POST', '/api/products', [
                'name' => 'ceci est un test',
                'price' => '10',
                'quantity' => '20',
                'image' => 'https://google.com',
             ]);
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['id' => 1 , 'name' => 'ceci est un test' ,'price' => '10' ,'quantity' => 20 , 'image' => 'https://google.com'], $responseData);
    }

    public function testApiGetAllProducts(): void
    {
        $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('GET', '/api/products');
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
    }
    
    
    public function testApiGetProduct(): void
    {
         $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('GET', '/api/products/1');
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['id' => 1, 'name' => 'ceci est un test' ,'price' => '10' ,'quantity' => 20 , 'image' => 'https://google.com'], $responseData);
    }


    // public function testApiFindCart(): void
    // {
    //     $client = static::createClient();            // Request a specific page
    //     $client->jsonRequest('GET', '/api/cart');
    //     $response = $client->getResponse();
    //     $this->assertResponseIsSuccessful();
    //     $this->assertJson($response->getContent());
    //     $responseData = json_decode($response->getContent(), true);
    //     fwrite(STDERR, print_r($responseData, TRUE));
    // }


    public function testApiPostCart(): void
    {
        $client = static::createClient();            // Request a specific page
        $client->jsonRequest('POST', '/api/cart/1',[
                    'quantity' => '1'
             ]);
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
    }

    public function testApiPostCartTooMuch(): void
    {
        $client = static::createClient();            // Request a specific page
        $client->jsonRequest('POST', '/api/cart/2',[
                    'quantity' => '100000'
             ]);
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        fwrite(STDERR, print_r($responseData, TRUE));
    }

    public function testApiDeleteProduct(): void
    {
        $client = static::createClient();// Request a specific page
        $client->jsonRequest('DELETE', '/api/products/1');
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['delete' => 'ok'], $responseData);
    }

    public function testApiDeleteProductCart(): void
    {
        $client = static::createClient();// Request a specific page
        $client->jsonRequest('DELETE', '/api/cart/1');
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        // fwrite(STDERR, print_r($responseData, TRUE));
    }
}

