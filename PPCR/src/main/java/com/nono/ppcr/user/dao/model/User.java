package com.nono.ppcr.user.dao.model;

public class User {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.id
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.username
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    private String username;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.password
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    private String password;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user.status
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    private Short status;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.id
     *
     * @return the value of user.id
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.id
     *
     * @param id the value for user.id
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.username
     *
     * @return the value of user.username
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    public String getUsername() {
        return username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.username
     *
     * @param username the value for user.username
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.password
     *
     * @return the value of user.password
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    public String getPassword() {
        return password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.password
     *
     * @param password the value for user.password
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user.status
     *
     * @return the value of user.status
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    public Short getStatus() {
        return status;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user.status
     *
     * @param status the value for user.status
     *
     * @mbggenerated Sun Jul 21 15:44:10 CST 2013
     */
    public void setStatus(Short status) {
        this.status = status;
    }
}