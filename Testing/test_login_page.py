import unittest
import re


class TestLoginPage(unittest.TestCase):

    def test_page_title(self):
        with open("login.html", "r") as f:
            html = f.read()
        expected_title = "Login"
        actual_title = " ".join(re.findall("<title>(.*?)</title>", html))
        self.assertEqual(expected_title, actual_title)

    def test_username_input(self):
        with open("login.html", "r") as f:
            html = f.read()
        expected_input = '<input type="text" class="form-control" name="username" placeholder="Username" ' \
                         'id="username" required>'
        self.assertIn(expected_input, html)

    def test_password_input(self):
        with open("login.html", "r") as f:
            html = f.read()
        expected_input = '<input type="password" class="form-control" name="password" placeholder="Password" ' \
                         'id="password" required>'
        self.assertIn(expected_input, html)

    def test_login_button(self):
        with open("login.html", "r") as f:
            html = f.read()
        expected_button = '<input type="submit" value="Login" class="form-control btn btn-success " name="">'
        self.assertIn(expected_button, html)

    def test_register_link(self):
        with open("login.html", "r") as f:
            html = f.read()
        expected_link = '<a href="{{ url_for(\'register\') }}">Register</a>'
        self.assertIn(expected_link, html)
