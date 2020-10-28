import React from 'react';
import {GoRocket} from 'react-icons/go'
import Video from '../../video/How to Get to Mars.mp4'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    FormBg,
    VideoBg
} from './SignInElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                </FormBg> 
                <FormWrap>
                    <Icon to="/">Back to Space<GoRocket />tour</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type='email' required />
                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type='password' required />
                                <FormButton type='submit'>Continue</FormButton>
                                <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default SignIn

